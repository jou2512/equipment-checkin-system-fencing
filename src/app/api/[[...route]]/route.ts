import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { bearerAuth } from 'hono/bearer-auth'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { users } from '@/lib/appwrite/config'


export const runtime = 'nodejs'

const app = new Hono().basePath('/api')

if (!process.env.CORS_ORIGIN) throw Error("pls set the cors origin")
console.log(process.env.CORS_ORIGIN)

const token = 'honoiscool'

app.use('*', bearerAuth({ token }))

app.post('/setUserRole', zValidator("param", z.object({
  userId: z.string(),
  role: z.string()
})), async (c) => {
  const { userId, role } = c.req.valid("param")
  await users.updateLabels(userId, [role]);
})

export const GET = handle(app)
export const POST = handle(app)

export type AppType =  typeof app