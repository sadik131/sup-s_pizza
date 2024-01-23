"use client"

import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const AuthWrapper = () => {
        const {data , status } = useSession();
        const[user, setUser] = useState({})
        const [loading,setLoading] = useState(false)

        useEffect(() => {
            setLoading(true)
            fetch('/api/profile')
                .then(res => res.json())
                .then(data => {
                    setUser(data.user)
                    setLoading(false)
                })
        }, [data])

        return (
            <AuthContext.Provider value={{
                user,loading
            }}>
                {children}
            </AuthContext.Provider>
        );
    };

    return (
        <SessionProvider>
            <AuthWrapper />
        </SessionProvider>
    );
};
