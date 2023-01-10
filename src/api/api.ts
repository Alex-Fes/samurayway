import axios from 'axios'

import { RootUserProfileType } from '../Components/Profile/RootUserProfileType'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '3af1a50e-9363-4d90-80ea-b72e392fafcb',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  },
  followUser(userId: number) {
    return instance.post(`follow/${userId}`, {})
  },
  unFollowUser(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: string) {
    console.warn('Obsolete method. Please use profileAPI object.')

    return profileAPI.getProfile(userId)
  },
}

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get<RootUserProfileType>(`profile/` + userId)
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status: status })
  },
  savePhoto(photoFile: string) {
    const formData = new FormData()

    formData.append('image', photoFile)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe: boolean) {
    return instance.post<ResponseType<{ userId: number }>>('/auth/login', {
      email,
      password,
      rememberMe,
    })
  },
  logout() {
    return instance.delete<ResponseType>('/auth/login')
  },
}

//TYPES ===========================

export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  data: D
}
