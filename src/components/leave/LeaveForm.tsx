"use client";

import { useState } from "react";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";

const { RangePicker } = DatePicker;

export interface LeaveFormData {
    reason: string;
    startDate: string;
    endDate: string;
}

interface Props {
    onSubmit: (data: LeaveFormData) => void;
}

export default function LeaveForm({ onSubmit }: Props) {

    const [range, setRange] = useState<[Dayjs, Dayjs] | null>(null);

    // 🔹 lý do có sẵn
    const presetReasons: string[] = [
        "Nghỉ phép năm",
        "Nghỉ ốm",
        "Việc đột xuất",
        "Chăm sóc gia đình",
        "Làm giấy tờ cá nhân",
        "Đưa đón / chăm con",
        "Đám cưới / tang lễ",
        "Chuyển nhà",
        "Khám bệnh",
        "Theo chỉ đạo cấp trên",
        "Nghỉ không lương",
        "Khác..."
    ];

    // 🔹 state chọn lý do
    const [reasonType, setReasonType] = useState<string>("");
    const [customReason, setCustomReason] = useState<string>("");

    const handleSubmit = () => {
        if (!range) {
            alert("Vui lòng chọn thời gian bắt đầu và kết thúc");
            return;
        }

        if (!reasonType) {
            alert("Vui lòng chọn lý do");
            return;
        }

        if (reasonType === "Khác..." && !customReason.trim()) {
            alert("Vui lòng nhập lý do khác");
            return;
        }

        onSubmit({
            reason: reasonType === "Khác..." ? customReason : reasonType,
            startDate: range[0].format("YYYY-MM-DD HH:mm"),
            endDate: range[1].format("YYYY-MM-DD HH:mm"),
        });
    };

    return (
        <div className="space-y-4">

            {/* ---- DATE + TIME ---- */}
            <div>
                <label className="text-sm font-medium">
                    Thời gian nghỉ (ngày + giờ)
                </label>

                <RangePicker
                    className="mt-1 w-full"
                    showTime={{
                        format: "HH:mm",
                        minuteStep: 10,               // không bắt buộc nhưng hợp logic
                        hideDisabledOptions: true,    // ẨN các option không hợp lệ
                    }}
                    format="YYYY-MM-DD HH:mm"
                    disabledTime={(_, type) => {
                        return {
                            disabledHours: () => [
                                ...Array.from({ length: 8 }, (_, i) => i),        // 0–7
                                ...Array.from({ length: 6 }, (_, i) => i + 18),   // 18–23
                            ],
                            disabledMinutes: () => {
                                const allowed = [0, 10, 30];   // 👈 THÊM 10 Ở ĐÂY
                                return Array.from({ length: 60 }, (_, i) => i).filter(
                                    (m) => !allowed.includes(m)
                                );
                            },
                        };
                    }}
                    onChange={(values) =>
                        setRange(values as [Dayjs, Dayjs] | null)
                    }
                />

            </div>

            {/* ---- REASON SELECT ---- */}
            <div>
                <label className="text-sm font-medium">Lý do nghỉ</label>

                <select
                    value={reasonType}
                    onChange={(e) => setReasonType(e.target.value)}
                    className="mt-1 w-full rounded border px-3 py-2"
                >
                    <option value="">-- Chọn lý do --</option>

                    {presetReasons.map((r) => (
                        <option key={r} value={r}>
                            {r}
                        </option>
                    ))}
                </select>
            </div>

            {/* ---- CUSTOM REASON ---- */}
            {reasonType === "Khác..." && (
                <input
                    className="w-full rounded border px-3 py-2"
                    style={{ marginBottom: "16px" }}
                    placeholder="Nhập lý do khác…"
                    value={customReason}
                    onChange={(e) => setCustomReason(e.target.value)}
                />
            )}

            {/* ---- SUBMIT ---- */}
            <button
                onClick={handleSubmit}
                className=" mt-3 rounded bg-blue-600 px-5 py-2  hover:bg-blue-700"
                style={{ color: "white" }}
            >
                Gửi đơn
            </button>
        </div>
    );
}
