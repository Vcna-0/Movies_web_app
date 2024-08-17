import React, { createContext, useState, useEffect, FC } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
   userId: string;
}

interface AuthContextType {
   user: User | null;
   login: (token: string) => void;
   logout: () => void;
}

interface DecodedToken {
   exp: number;
   userId: string;
}

interface Props {
   children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<Props> = ({ children }) => {
   const [user, setUser] = useState<User | null>(null);

   useEffect(() => {
      const token = localStorage.getItem('token');
      const expiration = localStorage.getItem('expiration');
      if (token && expiration) {
         const now = Date.now();
         if (now < parseInt(expiration) * 1000) {
            const decodedUser = jwtDecode<User>(token);
            setUser(decodedUser);
         } else {
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
         }
      }
   }, []);

   const login = (token: string) => {
      const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token);
      const expiration = decodedToken.exp;

      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expiration.toString());

      const decodedUser = jwtDecode<User>(token);
      setUser(decodedUser);
   };

   const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
      setUser(null);
   };

   return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
