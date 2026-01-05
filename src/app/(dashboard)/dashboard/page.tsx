"use client";

import Link from "next/link";
import {
    CalendarDays,
    Clock,
    User
} from "lucide-react";

export default function DashboardPage() {
    return (
        <div>
            <h1 className="mb-6 text-2xl font-semibold">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Nghỉ phép */}
                <Link href="/leave">
                    <div className="cursor-pointer rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="mb-3 flex items-center gap-3">
                            <CalendarDays className="h-6 w-6 text-blue-600" />
                            <span className="text-lg font-medium">
                                Đăng ký nghỉ phép
                            </span>
                        </div>

                        <p className="text-sm text-gray-600">
                            Tạo đơn xin nghỉ, xem lịch nghỉ của bạn và đồng nghiệp.
                        </p>
                    </div>
                </Link>

                {/* Tăng ca */}
                <Link href="/overtime">
                    <div className="cursor-pointer rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="mb-3 flex items-center gap-3">
                            <Clock className="h-6 w-6 text-green-600" />
                            <span className="text-lg font-medium">
                                Đăng ký tăng ca
                            </span>
                        </div>

                        <p className="text-sm text-gray-600">
                            Gửi yêu cầu tăng ca và theo dõi trạng thái phê duyệt.
                        </p>
                    </div>
                </Link>

                {/* Trang cá nhân */}
                <Link href="/profile">
                    <div className="cursor-pointer rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="mb-3 flex items-center gap-3">
                            <User className="h-6 w-6 text-purple-600" />
                            <span className="text-lg font-medium">
                                Trang cá nhân
                            </span>
                        </div>

                        <p className="text-sm text-gray-600">
                            Xem thông tin tài khoản, chỉnh sửa hồ sơ cá nhân.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
