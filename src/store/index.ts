
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import leaveReducer from "@/modules/leave/leave.slice";
import notificationReducer from "@/store/notification/notification.slice";
import authReducer from "./auth/auth.slice";

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

/* ======================
   ROOT REDUCER
====================== */
const rootReducer = combineReducers({
    leave: leaveReducer,
    notification: notificationReducer,
    auth: authReducer,
});

/* ======================
   PERSIST CONFIG
====================== */
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["leave", "notification", "auth"], // chỉ persist những module này
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

/* ======================
   STORE
====================== */
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    devTools: process.env.NODE_ENV !== "production",
});

/* ======================
   TYPES
====================== */
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
