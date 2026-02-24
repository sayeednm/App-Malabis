import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Halaman yang memerlukan login
const protectedRoutes = ['/checkout', '/orders', '/address', '/profile'];

// Halaman auth yang tidak boleh diakses jika sudah login
const authRoutes = ['/login'];

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });
  
  const { data: { session } } = await supabase.auth.getSession();
  const { pathname } = request.nextUrl;

  // Redirect to login if accessing protected route without auth
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !session) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Redirect to home if accessing auth routes while logged in
  if (authRoutes.some(route => pathname.startsWith(route)) && session) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return res;
}

export const config = {
  matcher: ['/checkout/:path*', '/orders/:path*', '/address/:path*', '/profile/:path*', '/login'],
};
