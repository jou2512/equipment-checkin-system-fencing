import express, { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../lib/hash';

const prisma = new PrismaClient();
const router = express.Router();
router.post('/', async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    res.status(409).json({ error: 'User exists' });
    return;
  }

  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash: hashed,
    },
  });

  res.status(201).json({ id: user.id, email: user.email, name: user.name });
  return
});

export default router;
