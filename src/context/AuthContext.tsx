"use client";

import { axiosInstance } from '@/services/AxiosInstance';
import { PostRequestUser } from '@/types/user/PostRequestUser';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextData {
    signed: Boolean;
    token: string | null;
    Login(data: PostRequestUser): Promise<void>;
    Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storagedToken = sessionStorage.getItem('@App:token');

        if (storagedToken != null) {
            setToken(storagedToken);
            axiosInstance.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
    }, []);

    const Login = async (data: PostRequestUser) => {
        try {
            console.log('sending request...');

            const response = await axiosInstance.post('/auth/login', data);

            console.log('response data:');
            console.table(response.data);

            setToken(response.data.token);
            sessionStorage.setItem('@App:token', response.data.token);
        } catch (error) {
            console.error(error);
        }
    };

    const Logout = () => {
        setToken(null);
        sessionStorage.removeItem('@App:token');
        axiosInstance.defaults.headers.Authorization = "";
    };

    const contextValue: AuthContextData = {
        signed: token != null ? true : false,
        token,
        Login,
        Logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
