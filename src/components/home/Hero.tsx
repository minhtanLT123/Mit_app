import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";


export default function Hero() {
    const { isAuthenticated } = useSelector(
        (state: RootState) => state.auth
    );

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <h1 className="mb-4 text-4xl font-bold text-gray-800">
                    Hệ thống quản lý nhân sự Mitsuba
                </h1>

                <p className="mx-auto mb-8 max-w-2xl text-gray-600">
                    Nền tảng quản lý thông tin nhân viên, đăng ký nghỉ phép,
                    tăng ca và cập nhật thông báo nội bộ nhanh chóng.
                </p>

                {!isAuthenticated && (
                    <div className="flex justify-center gap-4 py-6">
                        <Link
                            href="/login"
                            className="rounded border px-6 py-3 text-sm hover:bg-gray-100"
                        >
                            Đăng nhập
                        </Link>

                        <Link
                            href="/register"
                            className="rounded bg-blue-600 px-6 py-3 text-sm text-white hover:bg-blue-700"
                        >
                            Đăng ký
                        </Link>
                    </div>
                )}

            </div>
        </section>
    );
}
