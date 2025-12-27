"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { loginThunk } from "@/store/auth/auth.thunk";
import { AppDispatch, RootState } from "@/store";

export default function LoginPage() {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const { isLoading, error, isAuthenticated } =
        useSelector((state: RootState) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginThunk({ email, password }));
    };

    // ✅ Đã login thì đá về trang chủ
    useEffect(() => {
        if (isAuthenticated) {
            router.replace("/");
        }
    }, [isAuthenticated, router]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="w-90 rounded border bg-white p-6 shadow"
            >
                <h2 className="mb-6 text-center text-xl font-semibold">
                    Đăng nhập
                </h2>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded border px-3 py-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded border px-3 py-2"
                        required
                    />
                </div>

                {error && (
                    <p className="mb-3 text-sm text-red-500">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded bg-blue-600 py-2 text-white"
                >
                    {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
            </form>
        </div>
    );
}
