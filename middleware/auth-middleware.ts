import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { account } from '@/lib/appwrite/config';

// Define route protection configurations
const PROTECTED_ROUTES = {
  admin: [
    '/admin',
    '/admin/submissions',
    '/admin/tournament-setup',
    '/admin/equipment-management'
  ],
  staff: [
    '/staff',
    '/staff/check-in',
    '/staff/pickup-management'
  ]
};

export async function authMiddleware(request: NextRequest) {
  const session = request.cookies.get('appwrite_session');
  const pathname = request.nextUrl.pathname;

  try {
    // If no session, redirect to login for protected routes
    if (!session) {
      if (isProtectedRoute(pathname)) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      return null;
    }

    // Verify session
    const user = await account.get();

    // Check route permissions
    if (isAdminRoute(pathname) && !isAdmin(user)) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    if (isStaffRoute(pathname) && !isStaff(user)) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    return null;
  } catch (error) {
    // Invalid or expired session
    if (isProtectedRoute(pathname)) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('appwrite_session');
      return response;
    }
    return null;
  }
}

// Helper Functions
function isProtectedRoute(path: string): boolean {
  return Object.values(PROTECTED_ROUTES).some(routes => 
    routes.some(route => path.startsWith(route))
  );
}

function isAdminRoute(path: string): boolean {
  return PROTECTED_ROUTES.admin.some(route => path.startsWith(route));
}

function isStaffRoute(path: string): boolean {
  return PROTECTED_ROUTES.staff.some(route => path.startsWith(route));
}

function isAdmin(user: any): boolean {
  return user.labels.includes('admin');
}

function isStaff(user: any): boolean {
  return user.labels.includes('staff') || user.labels.includes('admin');
}