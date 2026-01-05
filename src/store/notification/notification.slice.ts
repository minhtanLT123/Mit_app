import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationItem } from "./notification.types";


interface NotificationState {
    items: NotificationItem[];
}

const initialState: NotificationState = {
    items: [],
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        pushNotification(
            state,
            action: PayloadAction<NotificationItem>
        ) {
            state.items.unshift(action.payload);
        },
        markAllRead(state) {
            state.items.forEach(
                (n) => (n.read = true)
            );
        },
    },
});

export const {
    pushNotification,
    markAllRead,
} = notificationSlice.actions;

export default notificationSlice.reducer;
