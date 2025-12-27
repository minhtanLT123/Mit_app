"use client";

import { useState } from "react";
import LeaveForm, {
    LeaveFormData,
} from "@/components/leave/LeaveForm";
import LeaveCalendar from "@/components/leave/LeaveCalendar";
import { LeaveItem, mockLeaves } from "@/mocks/leave";

export default function LeavePage() {
    const [leaves, setLeaves] =
        useState<LeaveItem[]>(mockLeaves);

    const handleSubmit = (data: LeaveFormData) => {
        setLeaves((prev) => [
            ...prev,
            {
                date: data.date,
                type:
                    data.type === "ANNUAL"
                        ? "success"
                        : "warning",
                reason: data.reason,
            },
        ]);
    };

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Form */}
            <div className="rounded bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">
                    Đăng ký nghỉ phép
                </h2>
                <LeaveForm onSubmit={handleSubmit} />
            </div>

            {/* Calendar */}
            <div className="rounded bg-white p-6 shadow-sm">
                <LeaveCalendar
                    leaves={leaves}
                    onSelectDate={() => { }}
                />
            </div>
        </div>
    );
}
