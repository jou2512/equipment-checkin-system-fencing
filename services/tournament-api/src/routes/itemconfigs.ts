// File: services/tournament-api/src/routes/itemconfigs.ts

import { Router, Request, Response } from 'express';

const router = Router({ mergeParams: true });

// GET /:tenantId/itemconfigs
router.get('/itemconfigs', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const configs = await prisma.itemConfig.findMany();
  res.json(configs);
});

// POST /:tenantId/itemconfigs
router.post('/itemconfigs', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { itemName, maxQuantity, required } = req.body;

  const config = await prisma.itemConfig.create({
    data: {
      itemName,
      maxQuantity,
      required,
    },
  });

  res.status(201).json(config);
});

// PATCH /:tenantId/itemconfigs/:id
router.patch('/itemconfigs/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;
  const update = req.body;

  const config = await prisma.itemConfig.update({
    where: { id },
    data: update,
  });

  res.json(config);
});

// DELETE /:tenantId/itemconfigs/:id
router.delete('/itemconfigs/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;

  await prisma.itemConfig.delete({ where: { id } });
  res.status(204).send();
});

export default router;
