import Link from "next/link";

export default function PublicHome() {
    return (
        <div className="mx-auto max-w-4xl p-6 space-y-8">
            <h1 className="text-2xl font-bold">
                Cổng thông tin nội bộ Mitsuba
            </h1>

            {/* Thông báo */}
            <section className="rounded border p-4">
                <h2 className="mb-2 font-semibold">
                    📢 Thông báo công ty
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Nghỉ lễ 2/9 từ ngày 1–3/9</li>
                    <li>Cập nhật chính sách OT mới</li>
                    <li>Quy định nghỉ phép 2025</li>
                </ul>
            </section>

            {/* Call to Action */}
            <section className="rounded border p-4 flex flex-col gap-3">
                <p className="text-sm text-gray-600">
                    🔒 Vui lòng đăng nhập để comment, đăng ký nghỉ phép
                    hoặc tăng ca.
                </p>

                <div className="flex gap-3">
                    <Link
                        href="/login"
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Đăng nhập
                    </Link>

                    {/* Nếu sau này có trang đăng ký */}
                    <Link
                        href="/register"
                        className="rounded border px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        Đăng ký
                    </Link>
                </div>
            </section>
        </div>
    );
}
