// --- src/routes/tenants.ts ---

import { Router } from 'express';
import { ensureTenantSchemaAndMigrate } from '../migrate';

const router = Router();

router.post('/:slug/migrate', async (req, res) => {
  const slug = req.params.slug;
    if (!slug) {
        res.status(400).json({ error: 'Kein Slug angegeben' });
        return
    }

  try {
    await ensureTenantSchemaAndMigrate(slug);
    res.status(200).json({ message: `Migration für ${slug} erfolgreich` });
  } catch (e) {
    res.status(500).json({ error: 'Migration fehlgeschlagen', details: (e as Error).message });
  }
});

export default router;
