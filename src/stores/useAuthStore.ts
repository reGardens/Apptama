import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
    username: string;
    password: string;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
    login: (username: string, password: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            username: '',
            password: '',
            isAuthenticated: false,

            setUsername: (username) => set({ username }), // THIS IS THE RIGHT WAY
            setPassword: (password) => set({ password }), // THIS IS ALSO

            login: (username, password) =>
                set({
                    username,
                    password,
                    isAuthenticated: true,
                }),

            logout: () =>
                set({
                    username: '',
                    password: '',
                    isAuthenticated: false,
                }),
        }),
        {
            name: 'auth', // key in localStorage
            storage: createJSONStorage(() => sessionStorage), // BARIS INI YANG MEMAKSA PAKAI SESSIONSTORAGE
            partialize: (state) => ({
                username: state.username,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);