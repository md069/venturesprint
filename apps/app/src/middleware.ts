import { updateSession } from "@v1/supabase/middleware";
import { createI18nMiddleware } from "next-international/middleware";
import { type NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(
    request,
    I18nMiddleware(request),
  );

  const isAppRoute = request.nextUrl.pathname.startsWith('/app');
  
  if (isAppRoute) {
    // Remove /app prefix for internal route handling
    const pathname = request.nextUrl.pathname.replace(/^\/app/, "");
    
    // Only check auth for non-login routes
    if (!pathname.endsWith("/login") && !user) {
      const locale = request.nextUrl.locale || 'en';
      return NextResponse.redirect(
        new URL(`/app/${locale}/login`, request.url)
      );
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
