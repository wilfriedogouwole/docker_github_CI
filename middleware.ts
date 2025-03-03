import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  
  const isAdminPanel = req.nextUrl.pathname.startsWith("/admin");
  const isAuthRoute = req.nextUrl.pathname.startsWith("/login") || 
                      req.nextUrl.pathname.startsWith("/register");

  // Rediriger les utilisateurs non authentifiés vers la page de connexion
  if (!isAuthenticated && isAdminPanel) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Rediriger les utilisateurs authentifiés loin des pages d'authentification
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Vérifier si l'utilisateur est un administrateur pour les routes admin
  if (isAuthenticated && isAdminPanel && token.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/register"],
};