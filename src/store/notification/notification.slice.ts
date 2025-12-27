import { createSlice } from "@reduxjs/toolkit";

interface Notification {
    id: number;
    title: string;
    isRead: boolean;
}

interface NotificationState {
    items: Notification[];
}

const initialState: NotificationState = {
    items: [
        {
            id: 1,
            title: "📢 Thông báo nghỉ lễ 2/9",
            isRead: false,
        },
        {
            id: 2,
            title: "📄 Chính sách OT mới",
            isRead: false,
        },
    ],
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        markAllRead(state) {
            state.items.forEach((n) => (n.isRead = true));
        },
    },
});

export const { markAllRead } = notificationSlice.actions;
export default notificationSlice.reducer;
