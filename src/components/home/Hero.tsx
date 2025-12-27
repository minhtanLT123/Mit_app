import Link from "next/link";

export default function Hero() {
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

                <div className="flex justify-center gap-4">
                    <Link
                        href="/login"
                        className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        href="/register"
                        className="rounded border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50"
                    >
                        Đăng ký
                    </Link>
                </div>
            </div>
        </section>
    );
}
