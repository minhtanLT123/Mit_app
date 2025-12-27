import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockLoginApi } from "@/mocks/auth.api";

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (
        {
            email,
            password,
        }: { email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const res = await mockLoginApi(email, password);

            if (typeof window !== "undefined") {
                localStorage.setItem(
                    "access_token",
                    res.access_token
                );
                localStorage.setItem(
                    "auth_user",
                    JSON.stringify(res.user)
                );
            }


            return res;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);
