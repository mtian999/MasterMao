import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "zh-CN"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";

function matchLocale(pathname: string): Locale | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return (locales as readonly string[]).includes(segment ?? "")
    ? (segment as Locale)
    : null;
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("/static/") ||
    pathname.includes("/images/") ||
    pathname.includes("/fonts/")
  ) {
    return NextResponse.next();
  }

  const currentLocale = matchLocale(pathname);

  if (!currentLocale) {
    const url = req.nextUrl.clone();
    const normalizedPath = pathname === "/" ? "" : pathname;
    url.pathname = `/${defaultLocale}${normalizedPath}`;
    url.search = search;
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}

export const config = {
  // 匹配所有路径，除了 API 路由、静态文件等
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|public).*)",
  ],
};
