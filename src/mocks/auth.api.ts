import { mockUsers } from "./users";

export const mockLoginApi = async (
    email: string,
    password: string
) => {
    await new Promise((r) => setTimeout(r, 800)); // fake latency

    const user = mockUsers.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        throw new Error("Email hoặc mật khẩu không đúng");
    }

    return {
        access_token: "fake-jwt-token-" + user.id,
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        },
    };
};
