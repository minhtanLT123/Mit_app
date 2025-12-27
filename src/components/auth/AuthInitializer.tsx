"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreAuth } from "@/store/auth/auth.slice";
import { AppDispatch } from "@/store";

export default function AuthInitializer({
    children,
}: {
    children: React.ReactNode;
}) {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const token =
            localStorage.getItem("access_token");
        const user =
            localStorage.getItem("auth_user");

        if (token && user) {
            dispatch(restoreAuth(JSON.parse(user)));
        }
    }, [dispatch]);

    return <>{children}</>;
}
