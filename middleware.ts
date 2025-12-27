import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("auth_token")?.value;
    const pathname = request.nextUrl.pathname;

    // Các route cần đăng nhập
    const protectedRoutes = ["/profile", "/dashboard", "/leave"];

    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    // Chưa login mà vào protected
    if (isProtected && !token) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }

    // Login rồi mà vẫn vào login/register
    if (
        (pathname === "/login" || pathname === "/register") &&
        token
    ) {
        return NextResponse.redirect(
            new URL("/profile", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/profile/:path*",
        "/dashboard/:path*",
        "/leave/:path*",
        "/login",
        "/register",
    ],
};
