"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menus = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Nghỉ phép", href: "/dashboard/leave" },
    { label: "Tăng ca", href: "/dashboard/overtime" },
    { label: "Trang cá nhân", href: "/profile" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r bg-white">
            <div className="p-6 font-bold text-blue-600">
                Mitsuba HR
            </div>

            <nav className="space-y-1 px-3">
                {menus.map((m) => (
                    <Link
                        key={m.href}
                        href={m.href}
                        className={clsx(
                            "block rounded px-4 py-2 text-sm hover:bg-blue-50",
                            pathname === m.href &&
                            "bg-blue-100 text-blue-600 font-medium"
                        )}
                    >
                        {m.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
