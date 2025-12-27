import { User } from "@/store/auth/auth.types";

export const mockUsers: Array<
    User & { password: string }
> = [
        {
            id: "1",
            email: "admin@gmail.com",
            password: "123456",
            name: "Admin",
            role: "admin",
        },
        {
            id: "2",
            email: "user@gmail.com",
            password: "123456",
            name: "User",
            role: "user",
        },
    ];
