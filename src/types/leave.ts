export type LeaveStatus = "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";

export interface LeaveItem {
    id: string;
    userId: string;

    startDate: string;
    endDate: string;

    date?: string; // optional, for backward compatibility
    type: "ANNUAL" | "SICK" | "PERSONAL";
    reason: string;

    status: LeaveStatus;

    approverNote?: string;
    createdAt: string;
}

export type LeaveType = "FULL_DAY" | "MULTI_DAY" | "HOURLY";

export interface LeaveFormData {
    type: LeaveType;

    // cũ
    startDate: string;
    endDate?: string;

    // mới
    startDateTime?: string;
    endDateTime?: string;

    reason: string;
}

