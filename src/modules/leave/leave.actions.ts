import { createAsyncThunk } from "@reduxjs/toolkit";
import leaveService from "@/services/leave";
import { LeaveItem, LeaveStatus } from "@/types/leave";

// Load danh sách
export const fetchLeaves = createAsyncThunk<LeaveItem[]>(
    "leave/fetchAll",
    async () => {
        return await leaveService.getAll();
    }
);

// Tạo đơn
export const createLeave = createAsyncThunk<LeaveItem, Partial<LeaveItem>>(
    "leave/create",
    async (data) => {
        return await leaveService.create(data);
    }
);

// Duyệt đơn
export const approveLeave = createAsyncThunk<LeaveItem, string>(
    "leave/approve",
    async (id) => {
        return await leaveService.approve(id);
    }
);

// Từ chối đơn
export const rejectLeave = createAsyncThunk<
    LeaveItem,
    { id: string; note?: string }
>("leave/reject", async ({ id, note }) => {
    return await leaveService.reject(id, note ?? "");
});

// Nhân viên hủy đơn
export const cancelLeave = createAsyncThunk<LeaveItem, string>(
    "leave/cancel",
    async (id) => {
        return await leaveService.cancel(id);
    }
);

// Hàm tổng hợp đổi trạng thái
export const updateLeaveStatus = createAsyncThunk<
    LeaveItem,
    { id: string; status: LeaveStatus; note?: string }
>("leave/updateStatus", async ({ id, status, note }) => {
    if (status === "APPROVED") return await leaveService.approve(id);
    if (status === "REJECTED") return await leaveService.reject(id, note ?? "");
    if (status === "CANCELLED") return await leaveService.cancel(id);

    // trạng thái PENDING không làm gì
    return await leaveService.getById(id);
});
