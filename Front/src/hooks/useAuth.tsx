import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext.tsx';

interface User {
   userId: string;
}

interface AuthContextType {
   user: User | null;
   login: (token: string) => void;
   logout: () => void;
}

export const useAuth = (): AuthContextType => {
   const context = useContext(AuthContext);
   if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
   }
   return context;
};
