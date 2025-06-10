import { Request, Response, NextFunction } from 'express'
import { getUserFromToken } from '../utils/appwrite'

export async function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) return next()

  const token = authHeader.split(' ')[1]

  try {
    const user = await getUserFromToken(token)
    req.headers['x-user-id'] = user.$id
    req.headers['x-user-role'] = user.labels?.[0] || 'guest'
  } catch (err) {
    console.warn('[Auth Error]', (err as Error).message)
  }

  next()
}
