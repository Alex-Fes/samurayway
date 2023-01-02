import React from 'react'

import { profileAPI, usersAPI } from '../api/api'
import { RootUserProfileType } from '../Components/Profile/RootUserProfileType'

import { AppThunkType } from './redux-store'
import { ActionTypes } from './state'

const ADD_POST = 'ADD-POST'
// const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'

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
  action: ActionTypes
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

//THUNKS ==================================
export const getUserProfile =
  (userId: string): AppThunkType =>
  async dispatch => {
    try {
      let response = await usersAPI.getProfile(userId)

      dispatch(setUserProfile(response.data))
    } catch (err) {
      console.log(err)
    }
  }

export const getStatus =
  (userId: string): AppThunkType =>
  async dispatch => {
    try {
      let response = await profileAPI.getStatus(userId)

      dispatch(setStatus(response.data))
    } catch (err) {
      console.log(err)
    }
  }

export const updateStatus =
  (status: string): AppThunkType =>
  async dispatch => {
    try {
      let response = await profileAPI.updateStatus(status)

      if (response.data.resultCode === 0) dispatch(setStatus(status))
    } catch (err) {
      console.log(err)
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
