import React, { createContext, useState, FC } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
   userId: string;
   username: string;
   email?: string;
   roles?: string[];
}

interface AuthContextType {
   user: User | null;
   login: (token: string) => void;
   logout: () => void;
}

interface Props {
   children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<Props> = ({ children }) => {
   const token = localStorage.getItem('token');
   const [user, setUser] = useState(token ? jwtDecode<User>(token) : null);

   const login = (token: string) => {
      localStorage.setItem('token', token);
      const decodedUser = jwtDecode<User>(token);
      setUser(decodedUser);
   };

   const logout = () => {
      localStorage.removeItem('token');
      setUser(null);
   };

   return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
