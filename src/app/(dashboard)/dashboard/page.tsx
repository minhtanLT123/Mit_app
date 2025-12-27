"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    return (
        <div>
            <h1 className="mb-6 text-2xl font-semibold">
                Dashboard
            </h1>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Đăng ký nghỉ phép */}
                <button
                    onClick={() => router.push("/leave")}
                    className="rounded bg-white p-6 text-left shadow-sm hover:ring-2 hover:ring-blue-500"
                >
                    <h3 className="mb-2 font-semibold">
                        📄 Đăng ký nghỉ phép
                    </h3>
                    <p className="text-sm text-gray-600">
                        Gửi yêu cầu nghỉ phép mới
                    </p>
                </button>

                <div className="rounded bg-white p-6 shadow-sm">
                    ⏱ Đăng ký tăng ca
                </div>

                <div className="rounded bg-white p-6 shadow-sm">
                    🔔 Thông báo nội bộ
                </div>
            </div>
        </div>
    );
}
