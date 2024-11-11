import { createContext, useContext, ReactNode, useState } from 'react';

/**
 * Interface defining the shape of authentication context
 * @interface AuthContextType
 * @property {boolean} isAuthenticated - Current authentication status
 * @property {() => void} login - Function to handle user login
 * @property {() => void} logout - Function to handle user logout
 */
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

/** Context for managing authentication state */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Provider component for authentication context
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
}

/**
 * Custom hook to access authentication context
 * @returns {AuthContextType} Authentication context value
 * @throws {Error} If used outside of AuthProvider
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
