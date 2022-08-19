import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../Redux/usersReduser";

type MapStateToPropsType = {
    usersPage: InitialStateType
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToProps;

let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);