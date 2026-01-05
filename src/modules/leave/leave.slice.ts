import { createSlice } from "@reduxjs/toolkit";
import {
    fetchLeaves,
    createLeave,
    approveLeave,
    rejectLeave,
    cancelLeave,
    updateLeaveStatus,
} from "./leave.actions";
import { LeaveItem } from "@/types/leave";

interface LeaveState {
    items: LeaveItem[];
    loading: boolean;
    error?: string | null;
}

const initialState: LeaveState = {
    items: [],
    loading: false,
    error: null,
};

const leaveSlice = createSlice({
    name: "leave",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // GET LIST
            .addCase(fetchLeaves.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLeaves.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })

            // CREATE
            .addCase(createLeave.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })

            // APPROVE
            .addCase(approveLeave.fulfilled, (state, action) => {
                const idx = state.items.findIndex((l) => l.id === action.payload.id);
                if (idx !== -1) state.items[idx] = action.payload;
            })

            // REJECT
            .addCase(rejectLeave.fulfilled, (state, action) => {
                const idx = state.items.findIndex((l) => l.id === action.payload.id);
                if (idx !== -1) state.items[idx] = action.payload;
            })

            // CANCEL
            .addCase(cancelLeave.fulfilled, (state, action) => {
                const idx = state.items.findIndex((l) => l.id === action.payload.id);
                if (idx !== -1) state.items[idx] = action.payload;
            })

            // UPDATE (approve / reject / cancel)
            .addCase(updateLeaveStatus.fulfilled, (state, action) => {
                const idx = state.items.findIndex((l) => l.id === action.payload.id);
                if (idx !== -1) state.items[idx] = action.payload;
            });
    },
});

export default leaveSlice.reducer;
