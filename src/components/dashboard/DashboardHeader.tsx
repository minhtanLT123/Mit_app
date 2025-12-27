"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { logout } from "@/store/auth/auth.slice";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootState) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        router.push("/login");
    };

    return (
        <header className="flex h-14 items-center justify-between border-b bg-white px-6">
            <span className="text-sm text-gray-600">
                Xin chào, <b>{user?.name}</b>
            </span>

            <button
                onClick={handleLogout}
                className="text-sm text-red-600 hover:underline"
            >
                Logout
            </button>
        </header>
    );
}
