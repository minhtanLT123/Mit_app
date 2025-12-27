"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function AuthGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const { isAuthenticated } = useSelector(
        (state: RootState) => state.auth
    );

    useEffect(() => {
        if (!isAuthenticated && pathname !== "/login") {
            router.replace("/login");
        }

        if (isAuthenticated && pathname === "/login") {
            router.replace("/");
        }
    }, [isAuthenticated, pathname, router]);

    return <>{children}</>;
}
