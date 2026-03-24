'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  type JSX,
} from 'react';
import { authStorage } from '@/lib/auth';

interface AuthState {
  readonly isAuthenticated: boolean;
  readonly accessToken: string | null;
  readonly login: (accessToken: string, refreshToken: string) => void;
  readonly logout: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { readonly children: ReactNode }): JSX.Element {
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    authStorage.getAccessToken(),
  );

  useEffect(() => {
    setAccessToken(authStorage.getAccessToken());
  }, []);

  const login = useCallback((newAccessToken: string, newRefreshToken: string) => {
    authStorage.setTokens(newAccessToken, newRefreshToken);
    setAccessToken(newAccessToken);
  }, []);

  const logout = useCallback(() => {
    authStorage.clearTokens();
    setAccessToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: accessToken !== null, accessToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
