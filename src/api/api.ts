import axios from "axios";
import {RootUserProfileType} from "../Components/Profile/RootUserProfileType";
import {FormDataType} from "../Components/Login/Login";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3af1a50e-9363-4d90-80ea-b72e392fafcb'
    }
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
        console.warn("Obsolete method. Please use profileAPI object.")
        return profileAPI.getProfile(userId)
        // .then(response => response.data)
    }
    // authUser (id: number, email: string, login: string) {
    //     return  instance.get(`auth/me`).then(response => response.data
    //         // if (response.data.resultCode === 0) {
    //         //     let {id, email, login} = response.data.data;
    //         //     this.props.setAuthUserDataAC(id, email, login)
    //         // }
    //     )
    // }
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<RootUserProfileType>(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
        //.then(response => response.data)
    },
    login(formData: FormDataType) {
        return instance.post('/auth/login', formData)
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

