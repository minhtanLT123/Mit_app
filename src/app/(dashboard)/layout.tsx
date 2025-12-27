import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AuthGuard from "@/components/auth/AuthGuard";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthGuard>
            <div className="flex min-h-screen flex-col">
                <main className="flex-1">{children}</main>
            </div>
        </AuthGuard>
    );
}
