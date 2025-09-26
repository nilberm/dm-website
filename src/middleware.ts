import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Verificar se é uma rota admin
  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    // Verificar se há autenticação no localStorage (via cookie ou header)
    const authCookie = request.cookies.get('admin-auth')
    
    if (!authCookie || authCookie.value !== 'true') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/dashboard/:path*']
}
