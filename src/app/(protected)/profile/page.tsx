"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import AuthGuard from "@/components/auth/AuthGuard";

export default function ProfilePage() {
    const { user } = useSelector(
        (state: RootState) => state.auth
    );

    return (
        <AuthGuard>
            <main className="mx-auto max-w-4xl px-6 py-10">
                <h1 className="mb-6 text-2xl font-bold">
                    Trang cá nhân
                </h1>

                <div className="mb-6 rounded border p-6 shadow-sm">
                    <p><b>Tên:</b> {user?.name}</p>
                    <p><b>Email:</b> {user?.email}</p>
                    <p><b>Vai trò:</b> {user?.role}</p>
                </div>

                <Link
                    href="/"
                    className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    ← Về trang chủ
                </Link>
            </main>
        </AuthGuard>
    );
}
