import React from 'react'

import { usersAPI } from '../api/api'
import { setAppStatusAC } from '../App/appReducer'
import { AppThunkDispatchType, AppThunkType } from '../App/store'
import { updateObjectInArray } from '../utilits/objectHelpers'

import { AppActionsType } from './types'

const initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProcess: [1],
}

export const usersReducer = (
  state: InitialStateType = initialState,
  action: AppActionsType
): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
        // users: state.users.map(u => {
        //     if (u.id === action.userId) {
        //         return {...u, followed: false}
        //     }
        //     return u;
        // })
      }
    case 'SET-USERS':
      return { ...state, users: action.users }
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage }
    case 'SET-TOTAL-USERS-COUNT':
      return { ...state, totalUsersCount: action.totalUsersCount }
    case 'TOGGLE-IS-FETCHING':
      return { ...state, isFetching: action.isFetching }
    case 'TOGGLE-IS-FOLLOWING-IN-PROCESS':
      return {
        ...state,
        followingInProcess: action.isFetching
          ? [...state.followingInProcess, action.userId]
          : state.followingInProcess.filter(id => id != action.userId),
      }
    default:
      return state
  }
}

//ACTIONS ========================================
export const followSuccess = (userId: number) => ({ type: 'FOLLOW', userId } as const)
export const unfollowSuccess = (userId: number) => ({ type: 'UNFOLLOW', userId } as const)
export const setUsers = (users: Array<UserType>) => ({ type: 'SET-USERS', users } as const)
export const setCurrentPage = (currentPage: number) =>
  ({ type: 'SET-CURRENT-PAGE', currentPage } as const)
export const setTotalUsersCount = (totalUsersCount: number) =>
  ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount,
  } as const)
export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: 'TOGGLE-IS-FETCHING', isFetching } as const)
export const toggleIsFollowingInProcess = (isFetching: boolean, userId: number) =>
  ({
    type: 'TOGGLE-IS-FOLLOWING-IN-PROCESS',
    isFetching,
    userId,
  } as const)

//THUNKS ===========================================
export const getUsersThunkCreator =
  (currentPage: number, pageSize: number): AppThunkType =>
  async dispatch => {
    dispatch(setAppStatusAC('loading'))
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    try {
      let response = await usersAPI.getUsers(currentPage, pageSize)

      dispatch(toggleIsFetching(false))
      dispatch(setUsers(response.data.items))
      dispatch(setTotalUsersCount(response.data.totalCount))
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      console.log(err)
    }
  }

export const onPageChangedThunkCreator =
  (pageNumber: number, pageSize: number): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setAppStatusAC('loading'))
      dispatch(toggleIsFetching(true))
      dispatch(setCurrentPage(pageNumber))
      let response = await usersAPI.getUsers(pageNumber, pageSize)

      dispatch(toggleIsFetching(false))
      dispatch(setUsers(response.data.items))
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      console.log(err)
    }
  }

const followUnfollowFlow = async (
  dispatch: AppThunkDispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: AppActionsType
) => {
  try {
    dispatch(setAppStatusAC('loading'))
    dispatch(toggleIsFollowingInProcess(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId))
      dispatch(setAppStatusAC('succeeded'))
    }
    dispatch(toggleIsFollowingInProcess(false, userId))
    dispatch(setAppStatusAC('succeeded'))
  } catch (err) {
    console.log(err)
  }
}

export const follow =
  (userId: number): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setAppStatusAC('loading'))
      await followUnfollowFlow(dispatch, userId, usersAPI.followUser, followSuccess)
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      console.log(err)
    }
  }

export const unfollow =
  (userId: number): AppThunkType =>
  async dispatch => {
    try {
      dispatch(setAppStatusAC('loading'))
      await followUnfollowFlow(dispatch, userId, usersAPI.unFollowUser, unfollowSuccess)
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      console.log(err)
    }
  }

//TYPES ==================================

type UserLocationType = {
  city: string
  country: string
}
export type UserType = {
  id: number
  photos: any
  followed: boolean
  name: string
  status: string
  location: UserLocationType
}
// export type followingInProcessType ={
//     id: number
// }
export type InitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProcess: Array<number>
}
