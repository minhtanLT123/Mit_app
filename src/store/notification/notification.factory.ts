import { NotificationItem } from "./notification.types";


export const notifyLeaveSubmitted = (
    reason: string
): NotificationItem => ({
    id: crypto.randomUUID(),
    title: "Gửi đơn nghỉ phép",
    message: `Bạn đã gửi đơn nghỉ phép: ${reason}`,
    type: "INFO",
    read: false,
    createdAt: new Date().toISOString(),
});

export const notifyLeaveApproved = (
    reason: string
): NotificationItem => ({
    id: crypto.randomUUID(),
    title: "Đơn nghỉ phép được duyệt",
    message: reason,
    type: "SUCCESS",
    read: false,
    createdAt: new Date().toISOString(),
});

export const notifyLeaveRejected = (
    reason: string
): NotificationItem => ({
    id: crypto.randomUUID(),
    title: "Đơn nghỉ phép bị từ chối",
    message: reason,
    type: "ERROR",
    read: false,
    createdAt: new Date().toISOString(),
});
