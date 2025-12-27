const features = [
    {
        title: "Thông báo nội bộ",
        desc: "Cập nhật nhanh các thông tin, chính sách mới từ công ty.",
    },
    {
        title: "Đăng ký nghỉ phép",
        desc: "Gửi và theo dõi trạng thái nghỉ phép dễ dàng.",
    },
    {
        title: "Đăng ký tăng ca",
        desc: "Quản lý thời gian làm thêm minh bạch.",
    },
];

export default function InfoSection() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-10 text-center text-2xl font-semibold">
                    Chức năng nổi bật
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {features.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-lg bg-white p-6 shadow-sm"
                        >
                            <h3 className="mb-2 text-lg font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
