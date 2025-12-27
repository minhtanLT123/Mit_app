"use client";

import { Calendar, Badge } from "antd";
import type { BadgeProps, CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { LeaveItem } from "@/mocks/leave";

interface Props {
    leaves: LeaveItem[];
    onSelectDate: (date: Dayjs) => void;
}

export default function LeaveCalendar({
    leaves,
    onSelectDate,
}: Props) {
    const getListData = (value: Dayjs) => {
        return leaves.filter(
            (l) => dayjs(l.date).format("YYYY-MM-DD") ===
                value.format("YYYY-MM-DD")
        );
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);

        return (
            <ul className="space-y-1">
                {listData.map((item) => (
                    <li key={item.reason}>
                        <Badge
                            status={
                                item.type as BadgeProps["status"]
                            }
                            text={item.reason}
                        />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender: CalendarProps<Dayjs>["cellRender"] = (
        current,
        info
    ) => {
        if (info.type === "date") {
            return dateCellRender(current);
        }
        return info.originNode;
    };

    return (
        <Calendar
            cellRender={cellRender}
            onSelect={onSelectDate}
        />
    );
}
