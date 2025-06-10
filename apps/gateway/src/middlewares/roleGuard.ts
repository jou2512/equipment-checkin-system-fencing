// middleware/roleGuard.ts
import { Request, Response, NextFunction } from 'express'

export function roleGuard(req: Request, res: Response, next: NextFunction) {
  const role = req.headers['x-user-role'] ?? 'guest'

  if (req.url.startsWith('/admin') && role !== 'admin') {
      res.status(403).send('Admin only')
      return
  }

  if (req.url.startsWith('/dashboard') && role === 'guest') {
      res.status(401).send('Login required')
      return
  }

  next()
}
