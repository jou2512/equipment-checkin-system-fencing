import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.enum(["admin", "organizer", "staff", "participant"]),
})

export type User = z.infer<typeof UserSchema>
