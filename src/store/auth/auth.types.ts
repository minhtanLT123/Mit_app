export interface LoginPayload {
    email: string;
    password: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    role: "admin" | "user";
}

export interface AuthResponse {
    accessToken: string;
    user: User;
}
