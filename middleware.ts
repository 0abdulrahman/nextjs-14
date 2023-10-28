export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*"],
};

// import { NextResponse } from "next/server";

// export function middleware(req) {
//   console.log("middleware!", req.cookies.get("next-auth.session-token"));
//   if (!req.cookies.get("next-auth.session-token")) return NextResponse.redirect(new URL("/login", req.url));
// }

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
