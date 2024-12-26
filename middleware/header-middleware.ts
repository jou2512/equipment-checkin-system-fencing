import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function headerMiddleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);
  
  // Add pathname to headers for server-side routing decisions
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return requestHeaders;
}