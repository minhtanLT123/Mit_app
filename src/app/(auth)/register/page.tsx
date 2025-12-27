"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-center">Đăng ký</h1>
            <p className="mt-2 text-center text-gray-500">
                Tạo tài khoản mới
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                    <label className="block text-sm font-medium">Họ tên</label>
                    <input
                        name="name"
                        className="mt-1 w-full rounded-lg border px-3 py-2"
                        placeholder="Nguyễn Văn A"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 w-full rounded-lg border px-3 py-2"
                        placeholder="email@company.com"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        className="mt-1 w-full rounded-lg border px-3 py-2"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">
                        Nhập lại mật khẩu
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="mt-1 w-full rounded-lg border px-3 py-2"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-green-600 py-2 font-semibold text-white hover:bg-green-700"
                >
                    Đăng ký
                </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
                Đã có tài khoản?{" "}
                <Link href="/login" className="font-medium text-blue-600">
                    Đăng nhập
                </Link>
            </p>
        </>
    );
}
