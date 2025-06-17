import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registerRoute from './routes/register';
import loginRoute from './routes/login';
import meRoute from './routes/me';
import myOrgsRoute from './routes/my-organizations';
import createOrgRoute from './routes/create-organization';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/me', meRoute);
app.use('/my-organizations', myOrgsRoute);
app.use('/create-organization', createOrgRoute);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`✅ Auth-Service läuft auf http://localhost:${PORT}`);
});
