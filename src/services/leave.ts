import { mockLeaves } from "@/mocks/leave";
import { LeaveItem } from "@/types/leave";

const leaveService = {
    async getAll(): Promise<LeaveItem[]> {
        return mockLeaves;
    },

    async getById(id: string): Promise<LeaveItem> {
        const item = mockLeaves.find(l => l.id === id);
        if (!item) throw new Error("Leave not found");
        return item;
    },

    async create(data: Partial<LeaveItem>): Promise<LeaveItem> {
        const item: LeaveItem = {
            id: crypto.randomUUID(),
            userId: data.userId ?? "u1",

            startDate: data.startDate!,   // 🔥 required now
            endDate: data.endDate!,

            type: data.type ?? "ANNUAL",
            reason: data.reason ?? "",

            status: "PENDING",
            createdAt: new Date().toISOString(),
        };

        mockLeaves.push(item);
        return item;
    },

    async approve(id: string): Promise<LeaveItem> {
        const item = await this.getById(id);
        item.status = "APPROVED";
        return item;
    },

    async reject(id: string, note: string): Promise<LeaveItem> {
        const item = await this.getById(id);
        item.status = "REJECTED";
        item.approverNote = note;
        return item;
    },

    async cancel(id: string): Promise<LeaveItem> {
        const item = await this.getById(id);
        item.status = "CANCELLED";
        return item;
    },
};

export default leaveService;
