import { LeaveStatus } from "@/types/leave";

export const statusMap: Record<
    LeaveStatus,
    {
        label: string;
        badge:
        | "success"
        | "error"
        | "default"
        | "processing"
        | "warning"
        | undefined;
    }
> = {
    PENDING: {
        label: "Chờ duyệt",
        badge: "processing",
    },
    APPROVED: {
        label: "Đã duyệt",
        badge: "success",
    },
    REJECTED: {
        label: "Từ chối",
        badge: "error",
    },
    CANCELLED: {
        label: "Đã hủy",
        badge: "default",
    },
};
