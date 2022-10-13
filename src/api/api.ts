import axios from "axios";
import {InitialStateType, UserType} from "../Redux/usersReducer";
import {RootUserProfileType} from "../Components/Profile/RootUserProfileType";
import {PathParamType} from "../Components/Profile/ProfileContainer";


export const getUsers = (currentPage = 1, pageSize = 10) => {
   return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => response.data)
}

export const followUser = (u:UserType) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY' : '3af1a50e-9363-4d90-80ea-b72e392fafcb'
        }}).then(response => response.data)
}

export const unFollowUser = (u: UserType) => {
   return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
        withCredentials: true,
        headers: {
            'API-KEY' : '3af1a50e-9363-4d90-80ea-b72e392fafcb'
        }}).then(response => response.data)
}

export const authMe = (userId: string) => {
    return axios.get<RootUserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => response.data)
}

