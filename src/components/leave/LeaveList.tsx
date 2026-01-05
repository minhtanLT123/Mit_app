import { Button, Badge } from "antd";
import dayjs from "dayjs";
import { LeaveItem } from "@/types/leave";
import { statusMap } from "@/utils/leaveStatus";

interface Props {
    leaves: LeaveItem[];
    role?: "EMPLOYEE" | "MANAGER" | "HR";
    onUpdateStatus: (
        id: string,
        status: LeaveItem["status"],
        note?: string
    ) => void;
}

export default function LeaveList({
    leaves,
    onUpdateStatus,
    role = "EMPLOYEE",
}: Props) {
    // ===== Fallback + tính số ngày nghỉ =====
    const calcDays = (item: LeaveItem) => {
        const start = dayjs(item.startDate ?? item.date); // fallback
        const end = dayjs(item.endDate ?? item.date);     // fallback
        return end.diff(start, "day") + 1;
    };

    return (
        <div className="space-y-3">
            {leaves.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center justify-between rounded border p-3"
                >
                    <div>
                        {/* ================= DATES ================= */}
                        <div className="font-medium">
                            {item.startDate ? (
                                <>
                                    {dayjs(item.startDate).format("DD/MM/YYYY")} →{" "}
                                    {dayjs(item.endDate).format("DD/MM/YYYY")}{" "}
                                    <span className="text-sm text-gray-500">
                                        ({calcDays(item)} ngày)
                                    </span>
                                </>
                            ) : (
                                // fallback đơn 1 ngày cũ
                                dayjs(item.date).format("DD/MM/YYYY")
                            )}
                        </div>

                        {/* ================= TYPE ================= */}
                        <div className="text-sm">
                            Loại phép: <b>{item.type}</b>
                        </div>

                        {/* ================= REASON ================= */}
                        <div className="text-sm">
                            Lý do: {item.reason || "—"}
                        </div>

                        {/* ================= STATUS BADGE ================= */}
                        <Badge
                            status={statusMap[item.status].badge}
                            text={statusMap[item.status].label}
                        />
                    </div>

                    {/* ================= EMPLOYEE ACTIONS ================= */}
                    {role === "EMPLOYEE" && item.status === "PENDING" && (
                        <Button
                            danger
                            onClick={() => onUpdateStatus(item.id, "CANCELLED")}
                        >
                            Hủy đơn
                        </Button>
                    )}

                    {/* ================= MANAGER / HR ACTIONS ================= */}
                    {role !== "EMPLOYEE" && item.status === "PENDING" && (
                        <div className="space-x-2">
                            <Button
                                type="primary"
                                onClick={() => onUpdateStatus(item.id, "APPROVED")}
                            >
                                Duyệt
                            </Button>

                            <Button
                                danger
                                onClick={() => {
                                    const note = prompt("Nhập lý do từ chối:");
                                    onUpdateStatus(item.id, "REJECTED", note ?? "");
                                }}
                            >
                                Từ chối
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
