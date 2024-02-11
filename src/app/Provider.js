"use client"

import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const AuthWrapper = () => {
        const { data, status } = useSession();
        const [order, setOrder] = useState([])
        const [user, setUser] = useState({})
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            setLoading(true)
            setUser(null)
            fetch('/api/profile')
                .then(res => res.json())
                .then(data => {
                    setUser(data.user)
                    setLoading(false)
                })
        }, [data])

        return (
            <AuthContext.Provider value={{
                user, loading, setLoading, order, setOrder
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
