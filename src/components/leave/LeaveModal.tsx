"use client";

import { Modal, Select } from "antd";
import { Dayjs } from "dayjs";
import { useState } from "react";

interface Props {
    open: boolean;
    date: Dayjs | null;
    onClose: () => void;
    onSubmit: (data: {
        date: string;
        type: "success" | "warning";
        reason: string;
    }) => void;
}

export default function LeaveModal({
    open,
    date,
    onClose,
    onSubmit,
}: Props) {
    const [type, setType] = useState<
        "success" | "warning"
    >("success");

    const handleOk = () => {
        if (!date) return;

        onSubmit({
            date: date.format("YYYY-MM-DD"),
            type,
            reason:
                type === "success"
                    ? "Nghỉ phép năm"
                    : "Nghỉ phép cá nhân",
        });

        onClose();
    };

    return (
        <Modal
            open={open}
            onOk={handleOk}
            onCancel={onClose}
            title="Đăng ký nghỉ phép"
        >
            <p className="mb-4">
                Ngày nghỉ:{" "}
                <b>{date?.format("DD/MM/YYYY")}</b>
            </p>

            <Select
                value={type}
                onChange={setType}
                className="w-full"
                options={[
                    {
                        value: "success",
                        label: "Nghỉ phép năm",
                    },
                    {
                        value: "warning",
                        label: "Nghỉ phép cá nhân",
                    },
                ]}
            />
        </Modal>
    );
}
