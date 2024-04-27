import React, { createContext, useContext } from 'react'
import { useState } from 'react';

export const AuthContext=createContext()
export default function AuthProvider({children}) {
        const initialAuthUser=localStorage.getItem("Users");
        // state manage
        const [authUser, setAuthUser] = useState(
            initialAuthUser? JSON.parse(initialAuthUser) : undefined,
        )
        return(
            <AuthContext.Provider value={[authUser,setAuthUser]}>
                {children}
            </AuthContext.Provider>
        )
}
export const useAuth = () => useContext(AuthContext);
//isko hum is liye banaye hai taki hum apane user ko har tarf /globally use kar sake
//ab hamara kam hoga ki, hame jo contex api create kiya hai usko hum apane main.jsx mai wrap karenge .
