import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC} from "../../Redux/usersReduser";

type MapStateToPropsType = {
    // users: InitialStateType
}
type MapDispatchToProps = {

}


let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: InitialStateType) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);