"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { fetchLeaves, createLeave } from "@/modules/leave/leave.actions";
import LeaveCalendar from "@/components/leave/LeaveCalendar";

export default function LeavePage() {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((s) => s.leave);

    useEffect(() => {
        dispatch(fetchLeaves());
    }, []);

    return (
        <div className="rounded border bg-white p-4">
            <h2 className="mb-4 text-lg font-semibold">Lịch nghỉ phép</h2>

            <LeaveCalendar
                leaves={items}
                onCreateLeave={(data) =>
                    dispatch(
                        createLeave({
                            ...data,
                            userId: "u1", // TODO: lấy từ auth state
                        })
                    )
                }
            />
        </div>
    );
}
