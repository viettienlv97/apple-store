import { create } from 'zustand'

type AuthState = {
  token?: string
  isLoggedIn: boolean
  login: (token: string) => void
  logout: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  token: '',
  isLoggedIn: false,
  login: (token = '') => set({token, isLoggedIn: true}),
  logout: () => set({token: '', isLoggedIn: false})
}))

export default useAuthStore