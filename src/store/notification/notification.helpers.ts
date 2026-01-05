import { NotificationItem } from "./notification.types";

export const notifyLeaveSubmitted = (
    reason: string
): NotificationItem => ({
    id: crypto.randomUUID(),
    title: "Đã gửi đơn nghỉ phép",
    message: `Lý do: ${reason}`,
    type: "INFO",
    read: false,
    createdAt: new Date().toISOString(),
});

export const notifyLeaveApproved = (
    title = "Đơn nghỉ phép"
): NotificationItem => ({
    id: crypto.randomUUID(),
    title: "Đơn được duyệt",
    message: `${title} đã được phê duyệt`,
    type: "SUCCESS",
    read: false,
    createdAt: new Date().toISOString(),
});

export const notifyLeaveRejected = (
    title = "Đơn nghỉ phép"
): NotificationItem => ({
    id: crypto.randomUUID(),
    title: "Đơn bị từ chối",
    message: `${title} đã bị từ chối`,
    type: "ERROR",
    read: false,
    createdAt: new Date().toISOString(),
});
