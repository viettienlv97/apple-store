import { User } from '../zustand/userStore.ts'
import { Base } from './base.ts'

export class Auth extends Base {
  async register(userData: User) {
    return this.request('/auth/register', { method: 'POST', data: userData })
  }

  async login(userData: {user: string, password: string}) {
    return this.request('/auth/login', {
      method: 'POST',
      data: userData
    })
  }
}
