import {StoreType} from "./redux-store";
import {createSelector} from "reselect";

const getUsers = (state: StoreType) => {
    return state.usersPage
}
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users
})


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














