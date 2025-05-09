import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    login(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    logout() {
      this.token = ''
      localStorage.removeItem('token')
    },
  },
})
