import express from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '../lib/jwt';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'No token provided' });
    return
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token) as any;
    const user = await prisma.user.findUnique({ where: { id: decoded.sub } });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return
    }

    res.json({ id: user.id, email: user.email, name: user.name });
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
    return
  }
});

export default router;
