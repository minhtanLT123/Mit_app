import type { ReactNode } from "react";

export default function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                {children}
            </div>
        </div>
    );
}
