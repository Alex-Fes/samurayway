import React, { Component } from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { StoreType } from '../../App/store'
import {
  getCurrentPage,
  getFollowingProcess,
  getIsFetching,
  getPageSize,
  getTotalUserCount,
  getUsersSuperSelector,
} from '../../Redux/user-selectors'
import {
  follow,
  getUsersThunkCreator,
  InitialStateType,
  onPageChangedThunkCreator,
  setCurrentPage,
  unfollow,
} from '../../Redux/usersReducer'
import { withAuthRedirect } from '../hoc/withAuthRedirect'

import { Users } from './Users'

class UsersContainer extends Component<UsersAPIComponentPropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props

    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props

    this.props.onPageChanged(pageNumber, pageSize)
  }

  render() {
    return (
      <>
        {/*{this.props.isFetching ? (*/}
        {/*  <CircularProgress size="30px" className="circularProgress" />*/}
        {/*) : null}*/}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          usersPage={this.props.usersPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProcess={this.props.followingInProcess}
        />
      </>
    )
  }
}

// let mapStateToProps = (state: StoreType): MapStateToPropsType => {
//     return {
//         usersPage: state.usersPage,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProcess: state.usersPage.followingInProcess
//     }
// }
let mapStateToProps = (state: StoreType): MapStateToPropsType => {
  return {
    usersPage: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProcess: getFollowingProcess(state),
  }
}

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers: getUsersThunkCreator,
    onPageChanged: onPageChangedThunkCreator,
  })
)(UsersContainer)

//TYPES ==============================

export type MapStateToPropsType = {
  usersPage: InitialStateType
  pageSize: number
  totalUserCount: number
  currentPage: number
  isFetching: boolean
  followingInProcess: Array<number>
}
export type MapDispatchToProps = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setCurrentPage: (currentPage: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
  onPageChanged: (pageNumber: number, pageSize: number) => void
}
export type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToProps
