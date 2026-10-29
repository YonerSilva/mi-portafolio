import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL("/es", request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};