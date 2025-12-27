export type LeaveItem = {
    date: string; // YYYY-MM-DD
    type: "success" | "warning" | "error";
    reason: string;
};

export const mockLeaves: LeaveItem[] = [
    {
        date: "2025-05-08",
        type: "warning",
        reason: "Nghỉ phép cá nhân",
    },
    {
        date: "2025-05-10",
        type: "success",
        reason: "Nghỉ phép năm",
    },
    {
        date: "2025-05-15",
        type: "error",
        reason: "Nghỉ không phép",
    },
];
