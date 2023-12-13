import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales, pathnames } from "./config";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
});


export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en)/:path*"],
};
