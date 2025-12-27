export default function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Company */}
                    <div>
                        <h3 className="mb-3 text-lg font-semibold">CompanyApp</h3>
                        <p className="text-sm text-gray-600">
                            Nền tảng nội bộ quản lý & phát triển sản phẩm.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="mb-3 font-medium">Liên kết</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Trang chủ</li>
                            <li>Giới thiệu</li>
                            <li>Chính sách</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-3 font-medium">Liên hệ</h4>
                        <p className="text-sm text-gray-600">
                            Email: support@company.com
                        </p>
                        <p className="text-sm text-gray-600">
                            Hotline: 0123 456 789
                        </p>
                    </div>
                </div>

                <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} CompanyApp. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
