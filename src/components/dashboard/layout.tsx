import AuthGuard from "@/components/auth/AuthGuard";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthGuard>
            <div className="flex h-screen">
                {/* Sidebar */}
                <Sidebar />

                {/* Main */}
                <div className="flex flex-1 flex-col">
                    <DashboardHeader />

                    <main className="flex-1 bg-gray-50 p-6 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </AuthGuard>
    );
}
