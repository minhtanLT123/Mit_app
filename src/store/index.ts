// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import notificationReducer from "./notification/notification.slice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notification: notificationReducer,

    },
});

// TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
