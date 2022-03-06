import {createContext} from "react";

interface AuthContextType {
    token?: null | string;
    isReady?: boolean;
    isLogin?: boolean;
}

export const AuthContext = createContext<AuthContextType>({})
