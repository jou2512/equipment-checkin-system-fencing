// File: services/tournament-api/src/routes/checkins.ts

import { Router, Request, Response } from 'express';

const router = Router({ mergeParams: true });

// GET /:tenantId/checkins
router.get('/checkins', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const checkIns = await prisma.checkIn.findMany({
    include: {
      itemChecks: true,
      submissions: true,
      latestSubmission: true,
    },
  });
  res.json(checkIns);
});

// GET /:tenantId/checkins/:id
router.get('/checkins/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;

  const checkIn = await prisma.checkIn.findUnique({
    where: { id },
    include: {
      itemChecks: true,
      submissions: true,
      latestSubmission: true,
    },
  });

  if (!checkIn) res.status(404).json({ error: 'CheckIn not found' });
  res.json(checkIn);
});

// POST /:tenantId/checkins
router.post('/checkins', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const {
    checkNumber,
    fencerName,
    nationalityCode,
    weaponType,
    eventKey,
    checkInStatus = 'pending',
    pickupConfirmed = false,
    itemChecks = [],
    initialSubmission = null,
  } = req.body;

  const created = await prisma.checkIn.create({
    data: {
      checkNumber,
      fencerName,
      nationalityCode,
      weaponType,
      eventKey,
      checkInStatus,
      pickupConfirmed,
      itemChecks: {
        create: itemChecks,
      },
      submissions: initialSubmission
        ? { create: initialSubmission }
        : undefined,
    },
    include: {
      itemChecks: true,
      submissions: true,
    },
  });

  res.status(201).json(created);
});

// PATCH /:tenantId/checkins/:id
router.patch('/checkins/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;
  const update = req.body;

  const updated = await prisma.checkIn.update({
    where: { id },
    data: update,
    include: {
      itemChecks: true,
      submissions: true,
      latestSubmission: true,
    },
  });

  res.json(updated);
});

// DELETE /:tenantId/checkins/:id
router.delete('/checkins/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;

  await prisma.checkIn.delete({ where: { id } });
  res.status(204).send();
});

export default router;
