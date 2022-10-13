import axios from "axios";
import {UserType} from "../Redux/usersReducer";
import {RootUserProfileType} from "../Components/Profile/RootUserProfileType";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3af1a50e-9363-4d90-80ea-b72e392fafcb'
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
    },
    followUser(u: UserType) {
        return instance.post(`follow/${u.id}`, {},).then(response => response.data)
    },
    unFollowUser(u: UserType) {
        return instance.delete(`follow/${u.id}`).then(response => response.data)
    },
    authMe(userId: string) {
        return instance.get<RootUserProfileType>(`profile/` + userId)
            .then(response => response.data)
    }
}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data)
// }
//
// export const followUser = (u: UserType) => {
//     return instance.post(`follow/${u.id}`, {},).then(response => response.data)
// }
//
// export const unFollowUser = (u: UserType) => {
//     return instance.delete(`follow/${u.id}`).then(response => response.data)
// }
//
// export const authMe = (userId: string) => {
//     return instance.get<RootUserProfileType>(`profile/` + userId)
//         .then(response => response.data)
// }

