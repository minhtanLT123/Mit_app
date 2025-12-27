import { loginThunk } from "./auth.thunk";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./auth.types";

interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        restoreAuth(
            state,
            action: PayloadAction<User>
        ) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },

        logout(state) {
            state.user = null;
            state.isAuthenticated = false;

            if (typeof window !== "undefined") {
                localStorage.removeItem("access_token");
                localStorage.removeItem("auth_user");
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error =
                    (action.payload as string) ||
                    "Login error";
            });
    },
});

export const { logout, restoreAuth } =
    authSlice.actions;
export default authSlice.reducer;
