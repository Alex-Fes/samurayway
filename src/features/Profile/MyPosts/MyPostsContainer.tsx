import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { StoreType } from '../../../App/store'
import { addPostActionCreator, PostType } from '../../../Redux/profileReducer'

import MyPosts from './MyPosts'

type MapStateToPropsType = {
  posts: Array<PostType>
  smallAva: string
  fullName: string
}
type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void
}
export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
  return {
    posts: state.ProfilePage.posts,
    smallAva: state.ProfilePage.profile.photos.small,
    fullName: state.ProfilePage.profile.fullName,
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
