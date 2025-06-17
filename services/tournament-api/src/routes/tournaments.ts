// File: services/tournament-api/src/routes/tournaments.ts

import { Router, Request, Response } from 'express';

const router = Router({ mergeParams: true });

// GET /:tenantId/tournaments
router.get('/tournaments', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const tournaments = await prisma.tournament.findMany({
    include: {
      itemConfigs: true,
      checkIns: true,
    },
  });
  res.json(tournaments);
});

// GET /:tenantId/tournaments/:id
router.get('/tournaments/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;

  const tournament = await prisma.tournament.findUnique({
    where: { id },
    include: {
      itemConfigs: true,
      checkIns: true,
    },
  });

  if (!tournament) res.status(404).json({ error: 'Tournament not found' });
  res.json(tournament);
});

// POST /:tenantId/tournaments
router.post('/tournaments', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { name, activeWeapons } = req.body;

  const created = await prisma.tournament.create({
    data: {
      name,
      activeWeapons,
    },
  });

  res.status(201).json(created);
});

// PATCH /:tenantId/tournaments/:id
router.patch('/tournaments/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;
  const update = req.body;

  const updated = await prisma.tournament.update({
    where: { id },
    data: update,
  });

  res.json(updated);
});

// DELETE /:tenantId/tournaments/:id
router.delete('/tournaments/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;

  await prisma.tournament.delete({ where: { id } });
  res.status(204).send();
});

export default router;
