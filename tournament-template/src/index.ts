import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/fencers', async (req, res) => {
  const fencers = await prisma.fencer.findMany();
  res.json(fencers);
});

app.post('/fencers', async (req, res) => {
  const { name, email, weapon } = req.body;
  const created = await prisma.fencer.create({ data: { name, email, weapon } });
  res.status(201).json(created);
});

const port = process.env.PORT || 4100;
app.listen(port, () => {
  console.log(`🎯 Turnier-Service läuft auf http://localhost:${port}`);
});
