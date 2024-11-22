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

  // Remove the /app prefix for route checking since Vercel handles it
  const pathname = request.nextUrl.pathname.replace(/^\/app/, "");
  
  // Check if we're on the app routes (now checking without /app prefix)
  const isAppRoute = request.nextUrl.pathname.startsWith('/app');
  
  // Only check auth for app routes (excluding login)
  if (isAppRoute && !pathname.endsWith("/login") && !user) {
    // Redirect to login with locale
    return NextResponse.redirect(
      new URL(`/app/${request.nextUrl.locale || 'en'}/login`, request.url)
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
