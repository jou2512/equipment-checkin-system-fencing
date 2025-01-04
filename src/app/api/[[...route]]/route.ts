// app/api/route.ts
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { bearerAuth } from 'hono/bearer-auth'
import * as sdk from "node-appwrite"
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const sdkclient = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("675b806a0009c79f1598")
  .setKey("standard_3a5a3209dfec1a7231142979b75c6cd4d6ea7308d87351465a5a21b6da3e0019c8304afb20dd1b3fcaa753146e1747fbf628364aa3a7c60f6c84ea2402ab56cf22a8230129dd30002ff99822f0f8c839d97fd68e5ca8f25ce131bd6f0796f9c57531a2303f937705211f2ba2fde4dea27ba10d74991bfc1ba651b33910859edc");

export const users = new sdk.Users(sdkclient)
export const teams = new sdk.Teams(sdkclient);

export const runtime = 'nodejs'

const app = new Hono().basePath('/api')

if (!process.env.CORS_ORIGIN) throw Error("pls set the cors origin")
const token = 'honoiscool'

app.use('*', bearerAuth({ token }))

app.get('/users', async (c) => {
  try {
    const usersList = await users.list();
    return c.json({
      users: usersList.users,
      total: usersList.total
    });
  } catch (error) {
    return c.json({ error: 'Failed to fetch users' }, 500);
  }
});

const updateRoleSchema = z.object({
  userId: z.string(),
  isAdmin: z.boolean()
});

app.post('/users/role', zValidator('json', updateRoleSchema), async (c) => {
  const { userId, isAdmin } = await c.req.json();

  try {
    // Get the user's current labels
    const currentUser = await users.get(userId);
    const currentLabels = currentUser.labels || [];

    // Prepare new labels
    let newLabels;
    if (isAdmin) {
      // Add admin label if not present
      newLabels = currentLabels.includes('admin') ? currentLabels : [...currentLabels, 'admin'];
    } else {
      // Remove admin label if present
      newLabels = currentLabels.filter(label => label !== 'admin');
    }

    // Update the labels
    await users.updateLabels(userId, newLabels);

    return c.json({ 
      success: true,
      userId,
      labels: newLabels
    });
  } catch (error) {
    console.error('Error updating user role:', error);
    return c.json({ 
      error: 'Failed to update user role',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof app