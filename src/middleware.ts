import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authMiddleware } from '../middleware/auth-middleware';
import { headerMiddleware } from '../middleware/header-middleware';

export async function middleware(request: NextRequest) {
  
  // First, modify headers
  const requestHeaders = headerMiddleware(request);

  // Then, check authentication
  const authResponse = await authMiddleware(request);
  
  // If auth middleware returns a response, use it
  if (authResponse) {
    return authResponse;
  }

  // Otherwise, continue with modified headers
  return NextResponse.next({
    request: { headers: requestHeaders }
  });
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/staff/:path*',
    '/login',
    '/unauthorized',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};