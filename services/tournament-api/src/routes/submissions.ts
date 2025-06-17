// File: services/tournament-api/src/routes/submissions.ts

import { Router, Request, Response } from 'express';

const router = Router({ mergeParams: true });

// GET /:tenantId/submissions
router.get('/submissions', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const submissions = await prisma.submission.findMany();
  res.json(submissions);
});

// GET /:tenantId/submissions/:id
router.get('/submissions/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;

  const submission = await prisma.submission.findUnique({ where: { id } });
  if (!submission) res.status(404).json({ error: 'Submission not found' });

  res.json(submission);
});

// POST /:tenantId/submissions
router.post('/submissions', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { checkInId, checkInKey, versionNumber, snapshotJson, changesJson, action, comment } = req.body;

  const created = await prisma.submission.create({
    data: {
      checkInId,
      checkInKey,
      versionNumber,
      snapshotJson,
      changesJson,
      action,
      comment,
    },
  });

  res.status(201).json(created);
});

// PATCH /:tenantId/submissions/:id
router.patch('/submissions/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;
  const update = req.body;

  const updated = await prisma.submission.update({
    where: { id },
    data: update,
  });

  res.json(updated);
});

// DELETE /:tenantId/submissions/:id
router.delete('/submissions/:id', async (req: Request, res: Response) => {
  const prisma = res.locals.prisma;
  const { id } = req.params;

  await prisma.submission.delete({ where: { id } });
  res.status(204).send();
});

export default router;
