"use client";

import { Button, DatePicker, Select, Input, Form } from "antd";
import dayjs from "dayjs";

export type LeaveFormData = {
    date: string;
    type: "ANNUAL" | "PERSONAL";
    reason: string;
};

interface Props {
    onSubmit: (data: LeaveFormData) => void;
}

export default function LeaveForm({ onSubmit }: Props) {
    const [form] = Form.useForm();

    const handleFinish = (values: any) => {
        onSubmit({
            date: values.date.format("YYYY-MM-DD"),
            type: values.type,
            reason: values.reason,
        });

        form.resetFields();
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
        >
            <Form.Item
                label="Ngày nghỉ"
                name="date"
                rules={[
                    {
                        required: true,
                        message: "Chọn ngày nghỉ",
                    },
                ]}
            >
                <DatePicker
                    className="w-full"
                    disabledDate={(d) =>
                        d && d.isBefore(dayjs(), "day")
                    }
                />
            </Form.Item>

            <Form.Item
                label="Loại nghỉ"
                name="type"
                rules={[{ required: true }]}
            >
                <Select
                    options={[
                        {
                            value: "ANNUAL",
                            label: "Nghỉ phép năm",
                        },
                        {
                            value: "PERSONAL",
                            label: "Nghỉ phép cá nhân",
                        },
                    ]}
                />
            </Form.Item>

            <Form.Item
                label="Lý do"
                name="reason"
                rules={[
                    { required: true, message: "Nhập lý do" },
                ]}
            >
                <Input.TextArea rows={3} />
            </Form.Item>

            <Button
                type="primary"
                htmlType="submit"
                block
            >
                Gửi đăng ký
            </Button>
        </Form>
    );
}
