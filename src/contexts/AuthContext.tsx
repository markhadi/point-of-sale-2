import { User } from '@/types/user';
import { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Interface defining the shape of authentication context
 * @interface AuthContextType
 * @property {boolean} isAuthenticated - Current authentication status
 * @property {() => void} login - Function to handle user login
 * @property {() => void} logout - Function to handle user logout
 */
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

/** Context for managing authentication state */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Provider component for authentication context
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'John Doe',
    role: 'Administrator',
  });

  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to access authentication context
 * @returns {AuthContextType} Authentication context value
 * @throws {Error} If used outside of AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
