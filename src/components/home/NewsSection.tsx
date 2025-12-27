const news = [
    {
        title: "Thông báo nghỉ lễ 30/4 – 1/5",
        date: "25/04/2025",
    },
    {
        title: "Cập nhật chính sách làm việc Hybrid",
        date: "18/04/2025",
    },
    {
        title: "Ra mắt hệ thống quản lý nhân sự mới",
        date: "10/04/2025",
    },
];

export default function NewsSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-6 text-2xl font-semibold">
                    Thông báo & Tin tức
                </h2>

                <ul className="space-y-4">
                    {news.map((item) => (
                        <li
                            key={item.title}
                            className="flex justify-between rounded border p-4 hover:bg-gray-50"
                        >
                            <span className="font-medium">
                                {item.title}
                            </span>
                            <span className="text-sm text-gray-500">
                                {item.date}
                            </span>
                        </li>
                    ))}
                </ul>

                <p className="mt-6 text-sm text-gray-500">
                    👉 Vui lòng đăng nhập để bình luận hoặc thao tác.
                </p>
            </div>
        </section>
    );
}
