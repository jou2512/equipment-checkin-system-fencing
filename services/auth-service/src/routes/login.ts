import express from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyPassword } from '../lib/hash';
import { signToken } from '../lib/jwt';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    res.status(401).json({ error: 'Invalid credentials' });
    return
  }

  const token = signToken({
    sub: user.id,
    email: user.email,
  });

  res.json({ token });
});

export default router;
