// app/api/route.ts
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { bearerAuth } from 'hono/bearer-auth'
import * as sdk from "node-appwrite"
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY);
const sdkclient = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("675b806a0009c79f1598")
.setKey("standard_3a5a3209dfec1a7231142979b75c6cd4d6ea7308d87351465a5a21b6da3e0019c8304afb20dd1b3fcaa753146e1747fbf628364aa3a7c60f6c84ea2402ab56cf22a8230129dd30002ff99822f0f8c839d97fd68e5ca8f25ce131bd6f0796f9c57531a2303f937705211f2ba2fde4dea27ba10d74991bfc1ba651b33910859edc");


const users = new sdk.Users(sdkclient)
const teams = new sdk.Teams(sdkclient)
const account_sdk = new sdk.Account(sdkclient)

export const runtime = 'edge'

const token = 'honoiscool'

const app = new Hono().basePath('/api')

// Create team for tournament
.post('/teams/create', zValidator("json", z.object({
  tournamentId: z.string(),
  tournamentName: z.string(),
  userId: z.string(),
  userEmail: z.string(),
  userName: z.string().optional(),
  userPhone: z.string().optional()
})), async (c) => {
  try {
    const { tournamentId, tournamentName, userId, userEmail, userName, userPhone } = await c.req.json()
    
    const team = await teams.create(tournamentId, tournamentName)
    
    await teams.createMembership(
      team.$id,
      ["tournament-admin"],
      userEmail,
      userId,
      userPhone,
      undefined,
      `${userName || "Tournament"} Admin`
    )

    return c.json({ success: true, team })
  } catch (error) {
    console.error('Team creation error:', error)
    return c.json({ success: false, error: error instanceof Error ? error.message : 'Team creation failed' }, 500)
  }
})

// Delete team
.delete('/teams/:teamId', async (c) => {
  try {
    const teamId = c.req.param('teamId')
    await teams.delete(teamId)
    return c.json({ success: true })
  } catch (error) {
    console.error('Team deletion error:', error)
    return c.json({ success: false, error: error instanceof Error ? error.message : 'Team deletion failed' }, 500)
  }
})
.get('/test', async (c) => {
  return c.json({ success: true, message: 'The API is working correctly!' });
})
.post('/users/memberships', zValidator('json', z.object({
  userId: z.string()
})), async (c) => {
  try {
    const { userId } = await c.req.json()
    const memberships = await users.listMemberships(userId)
    return c.json({ success: true, memberships: memberships.memberships })
  } catch (error) {
    return c.json({ success: false, error: error instanceof Error ? error.message : 'Failed to fetch memberships' }, 500)
  }
})
.post('/teams/join', zValidator('json', z.object({
  tournamentId: z.string(),
  role: z.string(),
  userEmail: z.string(),
  userId: z.string(),
  userName: z.string().optional()
})), async (c) => {
  try {
    const { tournamentId, role, userEmail, userId, userName } = await c.req.json()
    
    // Try to get team or create if doesn't exist
    let team;
    try {
      team = await teams.get(tournamentId);
    } catch {
      team = await teams.create(tournamentId, tournamentId);
    }

    const membership = await teams.createMembership(
      tournamentId,
      [role],
      userEmail,
      userId,
      undefined,
      undefined,
      userName
    );

    return c.json({ success: true, team, membership })
  } catch (error) {
    return c.json({ success: false, error: error instanceof Error ? error.message : 'Failed to join team' }, 500)
  }
})

.post('/teams/prefs', zValidator('json', z.object({
  teamId: z.string()
})), async (c) => {
  try {
    const { teamId } = await c.req.json()
    const prefs = await teams.getPrefs(teamId)
    return c.json({ success: true, preferences: prefs })
  } catch (error) {
    return c.json({ success: false, error: error instanceof Error ? error.message : 'Failed to fetch preferences' }, 500)
  }
})
// In your Hono route file:
.post('/teams/memberships', zValidator('json', z.object({
  teamId: z.string(),
  userId: z.string()
})), async (c) => {
  try {
    const { teamId } = await c.req.json()
    const membershipList = await teams.listMemberships(teamId)
    return c.json({ success: true, memberships: membershipList.memberships })
  } catch (error) {
    return c.json({ success: false, error: error instanceof Error ? error.message : 'Failed to fetch memberships' }, 500)
  }
})

.post('/teams/listMembers', zValidator('json', z.object({
  teamId: z.string()
})), async (c) => {
  try {
    const { teamId } = await c.req.json()
    const memberships = await teams.listMemberships(teamId)
    return c.json({ success: true, memberships: memberships.memberships })
  } catch (error) {
    return c.json({ success: false, error: error instanceof Error ? error.message : 'Failed to fetch team members' }, 500)
  }
})

.post('/teams/updateMember', zValidator('json', z.object({
  teamId: z.string(),
  memberId: z.string(),
  roles: z.array(z.string())
})), async (c) => {
  try {
    const { teamId, memberId, roles } = await c.req.json()
    await teams.updateMembership(teamId, memberId, roles)
    return c.json({ success: true })
  } catch (error) {
    return c.json({ success: false, error: error instanceof Error ? error.message : 'Failed to update member roles' }, 500)
  }
})
.post('/teams/adminMembers', zValidator('json', z.object({
  teamId: z.string()
})), async (c) => {
  try {
    const { teamId } = await c.req.json();
    
    // Get team memberships
    const response = await teams.listMemberships(teamId);
    const memberships = response.memberships ?? [];
    
    // Filter for tournament admins
    const adminMemberships = memberships.filter(item => 
      item.roles.includes("tournament-admin")
    );

    // Fetch user details for each admin
    const fencerPromises = adminMemberships.map(async (membership) => {
      return await users.get(membership.userId);
    });

    const fencers = await Promise.all(fencerPromises);

    return c.json({ success: true, fencers });
  } catch (error) {
    return c.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to fetch admin members' 
    }, 500);
  }
})
.post('/users/setUserRole', zValidator('json', z.object({
  userId: z.string(),
  role: z.string()
})), async (c) => {
  try {
    const { userId, role } = await c.req.json();
    await users.updateLabels(userId, [role]);
    return c.json({ success: true });
  } catch (error) {
    return c.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to update user role' 
    }, 500);
  }
})
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


// TODO: Complete the send-support-email route
app.get('/send-support-email', async (c) => {
  try {
    const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: 'joel22@gmx.ch',
    subject: `Support Request from joel`,
    html:  `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Support Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <p>Dear Fencing Equipment Check System Support,</p>

            <p>test</p>

            <p>Thank you for your assistance.</p>

            <p>Best regards,<br>
            Joel</p>

            <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">

            <p style="font-size: 12px; color: #666;">
                This email was sent via the support form on the Fencing Equipment Check System website.
                Sender's email: joel22@gmx.ch
            </p>
        </body>
        </html>
        `,
    });
    return c.json({
      data,
      error
    })
  } catch (error) {
    return c.json({error: 'Faild to send the email'}, 500)
  }
})

const updateRoleSchema = z.object({
  userId: z.string(),
  isAdmin: z.boolean()
})
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
export const DELETE = handle(app)

export type AppType = typeof app