"use client";

import { Badge, Calendar, Modal } from "antd";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { LeaveItem } from "@/types/leave";
import LeaveForm from "./LeaveForm";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

interface Props {
    leaves: LeaveItem[];
    onCreateLeave: (data: {
        startDate: string;
        endDate: string;
        reason: string;
    }) => void;

}

export default function LeaveCalendar({ leaves, onCreateLeave }: Props) {
    const [viewMode, setViewMode] = useState<"DAY" | "WEEK" | "MONTH">("DAY");
    const [leaveType, setLeaveType] = useState<"FULL_DAY" | "MULTI_DAY" | "HOURLY">("FULL_DAY");
    const [range, setRange] = useState<{
        start: Dayjs | null;
        end: Dayjs | null;
    }>({
        start: null,
        end: null,
    });
    const isInRange = (date: Dayjs) => {
        if (!range.start || !range.end) return false;
        return date.isAfter(range.start, "day") && date.isBefore(range.end, "day");
    };

    const isStart = (date: Dayjs) => {
        return range.start && date.isSame(range.start, "day");
    };

    const isEnd = (date: Dayjs) => {
        return range.end && date.isSame(range.end, "day");
    };

    const isToday = (date: Dayjs) => {
        return date.isSame(dayjs(), "day");
    };
    const isActive = (date: Dayjs) => {
        return selectedDate && date.isSame(selectedDate, "day");
    };
    const isInThisWeek = (date: Dayjs) => {
        if (viewMode !== "WEEK" || !selectedDate) return false;
        return date.isSame(selectedDate, "week");
    };

    const isInThisDay = (date: Dayjs) => {
        if (viewMode !== "DAY" || !selectedDate) return false;
        return date.isSame(selectedDate, "day");
    };
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

    const dateCellRender = (value: Dayjs) => {
        const active = isInThisDay(value);
        const currentMonth = (selectedDate ?? dayjs()).month();

        return (
            <div
                className="flex items-center justify-center"
                onClick={() => setSelectedDate(value)}
            >
                <div
                    className={`
          w-12 h-12
          flex items-center justify-center
          font-semibold
          rounded-lg
          border
          transition-all duration-300 ease-in-out

          ${isToday(value) ? "border-blue-500" : "border-gray-300"}
          ${active ? "bg-blue-500 text-white" : "bg-white text-gray-800"}
          hover:bg-blue-600
          hover:scale-110
          hover:text-white

          ${value.month() !== currentMonth ? "opacity-40" : ""}   /* 👈 LÀM MỜ NGÀY KHÁC THÁNG */
        `}
                >
                    {value.date()}
                </div>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* LEFT - CALENDAR */}
            <div className="rounded-xl border bg-white p-4 shadow-sm">

                <div className="flex gap-2 mb-3">
                    <button
                        className="px-3 py-1 rounded border hover:bg-blue-50"
                        onClick={() => {
                            setViewMode("DAY");
                            setSelectedDate(dayjs());
                        }}
                    >
                        Day
                    </button>
                    <button
                        className="px-3 py-1 rounded border hover:bg-blue-50"
                        onClick={() => {
                            setViewMode("MONTH");
                            setSelectedDate((selectedDate ?? dayjs()).subtract(1, "month"));
                        }}
                    >
                        ◀ Previous month
                    </button>

                    <button
                        className="px-3 py-1 rounded border hover:bg-blue-50"
                        onClick={() => {
                            setViewMode("MONTH");
                            setSelectedDate(dayjs());
                        }}
                    >
                        This month
                    </button>

                    <button
                        className="px-3 py-1 rounded border hover:bg-blue-50"
                        onClick={() => {
                            setViewMode("MONTH");
                            setSelectedDate((selectedDate ?? dayjs()).add(1, "month"));
                        }}
                    >
                        Next month ▶
                    </button>


                </div>

                <Calendar
                    value={selectedDate ?? dayjs()}
                    fullscreen={false}
                    fullCellRender={dateCellRender}
                    onSelect={(date) => setSelectedDate(date)}
                />
            </div>

            {/* RIGHT - FORM */}
            {/* RIGHT COLUMN */}
            <div className="space-y-4">

                {/* --- BOX 1: SUMMARY INFO --- */}
                <div className="rounded-xl border bg-white p-4 shadow-sm">

                    <h3 className="mb-2 font-semibold text-base">
                        Thông tin phép
                    </h3>

                    <div className="space-y-2 text-sm">

                        <div className="flex justify-between">
                            <span>Phép năm còn lại:</span>
                            <span className="font-semibold text-blue-600">8 ngày</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Đã sử dụng:</span>
                            <span className="font-semibold text-red-500">12 ngày</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Đang chờ duyệt:</span>
                            <span className="font-semibold text-orange-500">2 đơn</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Giờ OT bù còn lại:</span>
                            <span className="font-semibold text-green-600">6.5 giờ</span>
                        </div>

                    </div>
                </div>

                {/* --- BOX 2: LEAVE FORM --- */}
                <div className="rounded-xl border bg-white p-4 shadow-sm">

                    {!selectedDate && (
                        <div className="text-gray-500">
                            👉 Hãy chọn một ngày trên lịch để tạo đơn nghỉ
                        </div>
                    )}

                    {selectedDate && (
                        <>
                            <h3 className="mb-3 text-base font-semibold">
                                Tạo đơn nghỉ — {selectedDate.format("DD/MM/YYYY")}
                            </h3>

                            <LeaveForm
                                onSubmit={(data) => {
                                    onCreateLeave({
                                        startDate: data.startDate,
                                        endDate: data.endDate,
                                        reason: data.reason,
                                    });
                                    setSelectedDate(null);
                                }}
                            />
                        </>
                    )}
                </div>
            </div>

            {/* ---- HISTORY TABLE ---- */}
            <div className="mt-6 rounded-xl border bg-white p-4 shadow-sm">

                <h3 className="mb-3 text-base font-semibold">
                    Lịch sử đơn nghỉ phép
                </h3>

                {leaves.length === 0 && (
                    <div className="text-sm text-gray-500">
                        Chưa có đơn nghỉ phép nào.
                    </div>
                )}

                {leaves.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="px-3 py-2">Ngày bắt đầu</th>
                                    <th className="px-3 py-2">Ngày kết thúc</th>
                                    <th className="px-3 py-2">Lý do</th>
                                    <th className="px-3 py-2">Trạng thái</th>
                                </tr>
                            </thead>

                            <tbody>
                                {leaves.map((l) => (
                                    <tr key={l.id} className="border-t hover:bg-gray-50">
                                        <td className="px-3 py-2">
                                            {dayjs(l.startDate).format("DD/MM/YYYY HH:mm")}
                                        </td>

                                        <td className="px-3 py-2">
                                            {dayjs(l.endDate).format("DD/MM/YYYY HH:mm")}
                                        </td>

                                        <td className="px-3 py-2">
                                            {l.reason || "—"}
                                        </td>

                                        <td className="px-3 py-2">
                                            <span
                                                className={`
                    px-2 py-1 rounded text-xs font-semibold
                    ${l.status === "APPROVED" ? "bg-green-100 text-green-700" : ""}
                    ${l.status === "PENDING" ? "bg-blue-100 text-blue-700" : ""}
                    ${l.status === "REJECTED" ? "bg-red-100 text-red-700" : ""}
                    ${l.status === "CANCELLED" ? "bg-gray-200 text-gray-600" : ""}
                  `}
                                            >
                                                {l.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>


        </div>
    );

}
