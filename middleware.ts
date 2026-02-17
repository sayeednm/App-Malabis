import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Halaman yang memerlukan login
const protectedRoutes = ['/checkout', '/orders', '/address'];

// Halaman auth yang tidak boleh diakses jika sudah login
const authRoutes = ['/login'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if user is logged in (simplified - in production use proper auth)
  const isLoggedIn = request.cookies.get('user')?.value;

  // Redirect to login if accessing protected route without auth
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect to home if accessing auth routes while logged in
  if (authRoutes.some(route => pathname.startsWith(route)) && isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*', '/orders/:path*', '/address/:path*', '/login'],
};
