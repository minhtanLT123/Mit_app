export type NotificationType =
    | "INFO"
    | "SUCCESS"
    | "WARNING"
    | "ERROR";

export interface NotificationItem {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    read: boolean;
    createdAt: string;
}
