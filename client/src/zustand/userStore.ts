import { create } from 'zustand'
import ClientSDK from '../services/index.ts'
import useAuthStore from './authStore.ts'

export type User = {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  role?: string
  password?: string
}

type UserState = {
  user: User | null
  loading: boolean
  error: string | null
  login: (user: { user: string; password: string }) => void
  register: (user: User) => void
  logout: () => void
}

const useUserStore = create<UserState>((set) => ({
  user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : null,
  loading: false,
  error: null,
  login: async (user) => {
    try {
      set({ loading: true, error: null })
      const data = await ClientSDK.getInstance().login(user) as {data: User}
      set({ user: data.data, loading: false })
      useAuthStore.getState().login('')
      localStorage.setItem('userInfo', JSON.stringify(data.data))
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
  register: async (user: User) => {
    try {
      set({ loading: true, error: null })
      const data = await ClientSDK.getInstance().register(user) as {data: User}
      set({ user: data.data, loading: false })
      useAuthStore.getState().login('')
      localStorage.setItem('userInfo', JSON.stringify(data.data))
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
  logout: () => {
    set({ user: null, error: null })
    localStorage.removeItem('userInfo')
    useAuthStore.getState().logout()
  }
}))

export default useUserStore
