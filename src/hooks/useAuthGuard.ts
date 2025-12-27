"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function useAuthGuard() {
    const router = useRouter();
    const pathname = usePathname();
    const { isAuthenticated } = useSelector(
        (state: RootState) => state.auth
    );

    useEffect(() => {
        // Chưa login mà vào dashboard
        if (!isAuthenticated && pathname !== "/login") {
            router.replace("/login");
        }

        // Đã login mà vẫn ở login
        if (isAuthenticated && pathname === "/login") {
            router.replace("/");
        }
    }, [isAuthenticated, pathname, router]);
}
