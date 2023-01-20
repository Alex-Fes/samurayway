import { ResponseType } from '../../api/api'
import { instance } from '../../api/instance'

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
