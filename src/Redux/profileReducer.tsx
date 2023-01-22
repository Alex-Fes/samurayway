import React from 'react'

import { AxiosError } from 'axios'
import { stopSubmit } from 'redux-form'

import { profileAPI, usersAPI } from '../api/api'
import { setAppStatusAC } from '../App/appReducer'
import { AppThunkType } from '../App/store'
import { ProfileDataFormReduxFormType } from '../Components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm'
import { RootUserProfileType } from '../Components/Profile/RootUserProfileType'

import { AppActionsType } from './types'

const ADD_POST = 'profile/ADD-POST'
// const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET-STATUS'
const DELETE_POST = 'profile/DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS'

export type InitialStateType = typeof initialState
let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: "Yo yo, what's up", likeCount: 20 },
    { id: 3, message: 'Common', likeCount: 10 },
  ] as Array<PostType>,
  // newPostText: '',
  profile: {
    aboutMe: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: '',
    },
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: 0,
    photos: {
      small: '',
      large: '',
    },
  },
  status: '',
}

export const profileReducer = (
  state: InitialStateType = initialState,
  action: AppActionsType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      // eslint-disable-next-line no-case-declarations
      let newPost: PostType = {
        id: new Date().getTime(),
        message: action.newPostText,
        likeCount: 0,
      }

      return { ...state, posts: [...state.posts, newPost] }
    // case CHANGE_NEW_TEXT:
    //     // state.newPostText = action.newText;
    //     return {...state,
    //        // newPostText: action.newText
    //         };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile } as InitialStateType
    case SET_STATUS:
      return { ...state, status: action.status } as InitialStateType
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
      } as InitialStateType
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      } as InitialStateType
    default:
      return state
  }
}

//ACTIONS ================================
export const addPostActionCreator = (newPostText: string) =>
  ({ type: ADD_POST, newPostText } as const)
//export const onChangePostActionCreator = (newText: string) => ({type: CHANGE_NEW_TEXT, newText: newText}) as const;
export const setUserProfile = (profile: RootUserProfileType) =>
  ({ type: SET_USER_PROFILE, profile } as const)
export const setStatus = (status: string) => ({ type: SET_STATUS, status } as const)
export const deletePostAC = (postId: number) => ({ type: DELETE_POST, postId } as const)
export const savePhotoSuccessAC = (photos: string) =>
  ({ type: SAVE_PHOTO_SUCCESS, photos } as const)

//THUNKS ==================================
export const getUserProfile =
  (userId: number): AppThunkType =>
  async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
      let response = await usersAPI.getProfile(userId)

      dispatch(setUserProfile(response.data))
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      console.log(err)
    }
  }

export const getStatus =
  (userId: string): AppThunkType =>
  async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
      let response = await profileAPI.getStatus(userId)

      dispatch(setStatus(response.data))
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      console.log(err)
    }
  }

export const updateStatus =
  (status: string): AppThunkType =>
  async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
      let response = await profileAPI.updateStatus(status)

      if (response.data.resultCode === 0) dispatch(setStatus(status))
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      console.log(err)
    }
  }

export const savePhotoTC =
  (photoFile: string): AppThunkType =>
  async dispatch => {
    dispatch(setAppStatusAC('loading'))
    try {
      let response = await profileAPI.savePhoto(photoFile)

      if (response.data.resultCode === 0) dispatch(savePhotoSuccessAC(response.data.data.photos))
      dispatch(setAppStatusAC('succeeded'))
    } catch (err) {
      console.log(err)
    }
  }

export const updateUserDataTC =
  (formData: ProfileDataFormReduxFormType): AppThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId

    dispatch(setAppStatusAC('loading'))
    try {
      let response = await profileAPI.updateUserData(formData)

      if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
        dispatch(setAppStatusAC('succeeded'))
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'

        dispatch(stopSubmit('edit-profile', { _error: message }))
        dispatch(setAppStatusAC('succeeded'))
        //return Promise.reject(message)
      }
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>

      // debugger
      // dispatch(stopSubmit('edit-profile', { _error: err.message[0] }))
    }
  }

//TYPES ==========================
export type PostType = {
  id: number
  message: string
  likeCount: number
}
export type ProfileType = {
  aboutMe: ''
  contacts: {
    facebook: ''
    website: ''
    vk: ''
    twitter: ''
    instagram: ''
    youtube: ''
    github: ''
    mainLink: ''
  }
  lookingForAJob: false
  lookingForAJobDescription: ''
  fullName: ''
  userId: 0
  photos: {
    small: ''
    large: ''
  }
}
//
// type ProfileStatusType = {
//   status: string
// }
