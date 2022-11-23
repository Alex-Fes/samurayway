import {StoreType} from "./redux-store";

export const getUsers = (state: StoreType) => {
    return state.usersPage
}
export const getPageSize = (state: StoreType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: StoreType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: StoreType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: StoreType) => {
    return state.usersPage.isFetching
}
export const getFollowingProcess = (state: StoreType) => {
    return state.usersPage.followingInProcess
}














