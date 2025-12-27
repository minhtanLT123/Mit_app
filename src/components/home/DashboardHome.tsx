import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function DashboardHome() {
    const { user } = useSelector(
        (state: RootState) => state.auth
    );

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">
                Xin chào {user?.name} 👋
            </h1>

            <div className="grid grid-cols-2 gap-4">
                <div className="rounded border p-4">
                    📝 Đăng ký nghỉ phép
                </div>
                <div className="rounded border p-4">
                    ⏱ Đăng ký tăng ca
                </div>
            </div>
        </div>
    );
}
