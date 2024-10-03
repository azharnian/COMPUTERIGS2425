import { createContext } from "react";

interface User {
    username: string;
}

interface GlobalContextProps {
    user: User;
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);
