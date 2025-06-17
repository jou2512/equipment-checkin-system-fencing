import jwt from 'jsonwebtoken';
import { AuthAdapter } from './index';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

//TODO - später dynamisch den richtigen Adapter wählen oder ersetzen
export const betterAuthAdapter: AuthAdapter = {
  async verify(token: string) {
    const decoded = jwt.verify(token, JWT_SECRET) as any;

    return {
      userId: decoded.sub,
      email: decoded.email,
      roles: decoded.roles || [],
      organizationId: decoded.orgId || decoded.organizationId || 'unknown',
    };
  },
};
