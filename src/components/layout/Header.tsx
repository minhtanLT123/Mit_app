"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { logout } from "@/store/auth/auth.slice";
import { markAllRead } from "@/store/notification/notification.slice";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const { isAuthenticated, user } = useSelector(
        (state: RootState) => state.auth
    );

    const notifications = useSelector(
        (state: RootState) => state.notification.items
    );

    const unreadCount = notifications.filter(
        (n) => !n.read
    ).length;

    const [openProfile, setOpenProfile] = useState(false);
    const [openNoti, setOpenNoti] = useState(false);

    const profileRef = useRef<HTMLDivElement>(null);
    const notiRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        dispatch(logout());
        router.push("/login");
    };

    // Đóng dropdown khi click ngoài
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(e.target as Node)
            ) {
                setOpenProfile(false);
            }

            if (
                notiRef.current &&
                !notiRef.current.contains(e.target as Node)
            ) {
                setOpenNoti(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-lg font-bold text-blue-600"
                >
                    Mitsuba
                </Link>

                {/* Menu */}
                <nav className="ml-6 flex items-center gap-6">

                    {isAuthenticated && (
                        <>
                            <Link
                                href="/dashboard"
                                className="text-sm font-medium text-gray-700 hover:text-blue-600"
                            >
                                Dashboard
                            </Link>
                        </>
                    )}

                </nav>

                {/* Auth */}
                {!isAuthenticated ? (
                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="text-sm text-gray-600 hover:text-blue-600"
                        >
                            Đăng nhập
                        </Link>

                        <Link
                            href="/register"
                            className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                        >
                            Đăng ký
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        {/* 🔔 Notification */}
                        <div
                            className="relative"
                            ref={notiRef}
                        >
                            <button
                                onClick={() =>
                                    setOpenNoti(!openNoti)
                                }
                                className="relative rounded-full p-2 hover:bg-gray-100"
                            >
                                <Bell size={20} />

                                {unreadCount > 0 && (
                                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                        {unreadCount}
                                    </span>
                                )}
                            </button>

                            {openNoti && (
                                <div className="absolute right-0 mt-2 w-80 rounded border bg-white shadow-lg">
                                    <div className="flex items-center justify-between border-b px-4 py-2">
                                        <span className="text-sm font-semibold">
                                            Thông báo
                                        </span>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    markAllRead()
                                                )
                                            }
                                            className="text-xs text-blue-600 hover:underline"
                                        >
                                            Đánh dấu đã đọc
                                        </button>
                                    </div>

                                    <ul className="max-h-64 overflow-auto">
                                        {notifications.length ===
                                            0 ? (
                                            <li className="px-4 py-4 text-sm text-gray-500">
                                                Không có thông báo
                                            </li>
                                        ) : (
                                            notifications.map(
                                                (n) => (
                                                    <li
                                                        key={
                                                            n.id
                                                        }
                                                        className={`px-4 py-3 text-sm hover:bg-gray-50 ${!n.read
                                                            ? "bg-blue-50"
                                                            : ""
                                                            }`}
                                                    >
                                                        {n.title}
                                                    </li>
                                                )
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* 👤 Profile dropdown */}
                        <div
                            className="relative"
                            ref={profileRef}
                        >
                            <button
                                onClick={() =>
                                    setOpenProfile(
                                        !openProfile
                                    )
                                }
                                className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:bg-gray-50"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                                    {user?.name?.charAt(0)}
                                </div>
                                <span className="text-gray-700">
                                    {user?.name}
                                </span>
                            </button>

                            {openProfile && (
                                <div className="absolute right-0 mt-2 w-48 rounded border bg-white shadow-lg">
                                    <Link
                                        href="/profile"
                                        onClick={() =>
                                            setOpenProfile(
                                                false
                                            )
                                        }
                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        👤 Trang cá nhân
                                    </Link>

                                    <Link
                                        href="/"
                                        onClick={() =>
                                            setOpenProfile(
                                                false
                                            )
                                        }
                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        📰 Về trang chủ
                                    </Link>

                                    <div className="border-t" />

                                    <button
                                        onClick={
                                            handleLogout
                                        }
                                        className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                                    >
                                        🚪 Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
