import express from 'express';
import checkinsRoute from './routes/checkins';
import loadTenant from './middleware/loadTenant';
import itemconfigsRoute from './routes/itemconfigs';
import submissionsRoute from './routes/submissions';
import tournamentsRoute from './routes/tournaments';
import checkinPickupRoute from './routes/checkinPickup';

const app = express();
app.use(express.json());

// Tenant-spezifische API
app.use('/:tenantId', loadTenant as express.RequestHandler, 
  checkinsRoute as express.RequestHandler, 
  itemconfigsRoute as express.RequestHandler, 
  submissionsRoute as express.RequestHandler, 
  tournamentsRoute as express.RequestHandler, 
  checkinPickupRoute as express.RequestHandler
);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`✅ Tournament-API läuft auf http://localhost:${PORT}`);
});
