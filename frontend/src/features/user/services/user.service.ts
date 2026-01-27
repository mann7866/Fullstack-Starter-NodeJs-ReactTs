import type { ApiSuccessResponse } from '@/types/apiResponse'
import { api } from '@/services/api'
import type { User } from '@/features/user/types/user'

export const userService = {
  getAll: async (): Promise<User[]> => {
    const res = await api.get<ApiSuccessResponse<User[]>>('/users')
    return res.data.data
},

  getById: async (id: number): Promise<User> => {
    const res = await api.get(`/users/${id}`)
    return res.data
  },

  create: async (data: Omit<User, 'id'>): Promise<User> => {
    const res = await api.post('/users', data)
    return res.data
  },

  update: async (id: number, data: Partial<User>): Promise<User> => {
    const res = await api.put(`/users/${id}`, data)
    return res.data
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`)
  },
}
