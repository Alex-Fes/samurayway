import axios, { AxiosResponse } from 'axios'

import { ProfileDataFormReduxFormType } from '../Components/Profile/ProfileInfo/ProfileDataForm'
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
  getProfile(userId: number) {
    console.warn('Obsolete method. Please use profileAPI object.')

    return profileAPI.getProfile(userId)
  },
}

export const profileAPI = {
  getProfile(userId: number) {
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
  updateUserData(formData: ProfileDataFormReduxFormType) {
    return instance.put<'', AxiosResponse<ResponseType>, ProfileDataFormReduxFormType>(
      `profile`,
      formData
    )
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe: boolean, captcha: string) {
    return instance.post<ResponseType<{ userId: number }>>('/auth/login', {
      email,
      password,
      rememberMe,
      captcha,
    })
  },
  logout() {
    return instance.delete<ResponseType>('/auth/login')
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  },
}

//TYPES ===========================

export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  data: D
}
