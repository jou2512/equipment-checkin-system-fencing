// File: services/tournament-api/src/routes/checkinPickup.ts

import { Router, Request, Response } from 'express';

const router = Router({ mergeParams: true });

// PATCH /:tenantId/checkins/:id/pickup
router.patch('/checkins/:id/pickup', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;

  const updated = await prisma.checkIn.update({
    where: { id },
    data: { pickupConfirmed: true },
  });

  res.status(200).json(updated);
});

export default router;
