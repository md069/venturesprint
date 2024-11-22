import { updateSession } from "@v1/supabase/middleware";
import { createI18nMiddleware } from "next-international/middleware";
import { type NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export async function middleware(request: NextRequest) {
  // Extract the pathname
  const pathname = request.nextUrl.pathname;

  // Check if we're on the app path
  const isAppPath = pathname === '/app' || pathname.startsWith('/app/');
  
  // If this is not an app path, skip middleware processing
  if (!isAppPath) return NextResponse.next();

  const { response, user } = await updateSession(
    request,
    I18nMiddleware(request),
  );

  // Handle root /app path and ensure locale is present
  if (pathname === '/app' || pathname === '/app/') {
    if (!user) {
      return NextResponse.redirect(new URL(`/app/en/login`, request.url));
    }
    return NextResponse.redirect(new URL(`/app/en`, request.url));
  }

  // Get the path after /app
  const appPathname = pathname.replace(/^\/app/, '');
  
  // Allow access to login page without authentication
  if (appPathname.includes('/login')) {
    return response;
  }
  
  // Redirect to login if user is not authenticated
  if (!user) {
    // Extract locale from URL or use default
    const urlParts = appPathname.split('/').filter(Boolean);
    const locale = urlParts[0] || 'en';
    return NextResponse.redirect(new URL(`/app/${locale}/login`, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    "/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    // Specifically match /app paths
    "/app",
    "/app/:path*"
  ],
};
