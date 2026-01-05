import { LeaveItem } from "@/types/leave";

export const mockLeaves: LeaveItem[] = [
    {
        id: "1",
        userId: "u1",

        // đơn 1 ngày → start = end = date
        date: "2026-01-10",
        startDate: "2026-01-10",
        endDate: "2026-01-10",

        type: "ANNUAL",
        reason: "Về quê",
        status: "PENDING",
        createdAt: new Date().toISOString(),
    },
    {
        id: "2",
        userId: "u2",

        date: "2026-01-15",
        startDate: "2026-01-15",
        endDate: "2026-01-17", // ví dụ đơn nhiều ngày

        type: "SICK",
        reason: "Ốm",
        status: "APPROVED",
        createdAt: new Date().toISOString(),
    },
];
