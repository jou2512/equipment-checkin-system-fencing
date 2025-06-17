// --- src/index.ts (aktualisiert) ---

import express from 'express';
import dotenv from 'dotenv';
import tenantRoute from './routes/migrate';



dotenv.config();

const app = express();
app.use(express.json());

app.use('/tenants', tenantRoute);

const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`🏁 Turnier-Core-Service läuft auf http://localhost:${port}`);
});