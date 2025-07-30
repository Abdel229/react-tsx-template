import { create } from 'zustand';

interface UserState {
  user: { id: string; email: string } | null;
  isAuthenticated: boolean;
  /**
   * Logs in the user and stores user data in localStorage.
   * @param userData - The user data to store.
   */
  login: (userData: { id: string; email: string }) => void;
  /**
   * Logs out the user and removes user data from localStorage.
   */
  logout: () => void;
}

/**
 * Zustand store for managing user authentication state.
 * Persists authentication state to localStorage.
 */
export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
    set({ user: userData, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    set({ user: null, isAuthenticated: false });
  },
}));

// Initialize store from localStorage on app load
useUserStore.setState(() => {
  const storedUser = localStorage.getItem('user');
  const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    isAuthenticated: storedIsAuthenticated === 'true',
  };
});