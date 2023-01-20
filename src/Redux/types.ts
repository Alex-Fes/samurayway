import { initializedSuccessAC, setAppStatusAC } from '../App/appReducer'
import { getAuthUserDataTC, getCaptchaUrlAC, setAuthUserDataAC } from '../features/auth/authReducer'

import { DialogType, MessageType, sendMessageActionCreator } from './dialogsReducer'
import {
  addPostActionCreator,
  deletePostAC,
  savePhotoSuccessAC,
  setStatus,
  setUserProfile,
} from './profileReducer'
import {
  followSuccess,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowingInProcess,
  unfollowSuccess,
} from './usersReducer'

type PostType = {
  id: number
  message: string
  likeCount: number
}
export type ProfilePageType = {
  newPostText: string
  posts: Array<PostType>
  //profile: RootUserProfileType
}
type DialogsPageType = {
  dialogs: Array<DialogType>
  message: Array<MessageType>
  newMessageText: string
}
export type SidebarType = {}
export type RootStateType = {
  ProfilePage: ProfilePageType
  DialogsPage: DialogsPageType
  sidebar: SidebarType
}

export type AppActionsType =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof sendMessageActionCreator>
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof setAuthUserDataAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof toggleIsFollowingInProcess>
  | ReturnType<typeof getAuthUserDataTC>
  | ReturnType<typeof initializedSuccessAC>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof savePhotoSuccessAC>
  | ReturnType<typeof getCaptchaUrlAC>
  | ReturnType<typeof setAppStatusAC>
