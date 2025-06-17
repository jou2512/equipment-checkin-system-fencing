import { Request, Response, NextFunction } from 'express';
import { getPrismaForTenant } from '../getPrismaForTenants';

declare global {
  namespace Express {
    interface Response {
      locals: {
        prisma: ReturnType<typeof getPrismaForTenant>;
      };
    }
  }
}

export default function loadTenant(req: Request, res: Response, next: NextFunction) {
  const { tenantId } = req.params;
  if (!tenantId) return res.status(400).json({ error: 'Missing tenantId' });

  try {
    const prisma = getPrismaForTenant(tenantId);
    res.locals.prisma = prisma;
    next();
  } catch (err) {
    return res.status(500).json({ error: 'Failed to initialize tenant DB' });
  }
}
