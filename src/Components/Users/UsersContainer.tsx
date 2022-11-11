import React from 'react';
import {connect} from 'react-redux';
import {StoreType} from '../../Redux/redux-store';
import {
    follow,
    getUsersThunkCreator,
    InitialStateType,
    onPageChangedThunkCreation,
    setCurrentPage,
    toggleIsFollowingInProcess,
    unfollow
} from '../../Redux/usersReducer';
import Users from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    //setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
   // setTotalUsersCount: (currentCount: number) => void
   // toggleIsFetching: (isFetching: boolean) => void
   // toggleIsFollowingInProcess: (isFetching:boolean, followingInProcess: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    onPageChanged:(pageNumber: number, pageSize: number) => void
}
export type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToProps;

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChanged(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                //toggleIsFollowingInProcess={this.props.toggleIsFollowingInProcess}
                followingInProcess={this.props.followingInProcess}
            />
        </>
    }
}

let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }
// export default connect(mapStateToProps,
//     {
//         follow,
//         unfollow,
//        // setUsers,
//         setCurrentPage,
//         //setTotalUsersCount,
//        // toggleIsFetching,
//         //toggleIsFollowingInProcess,
//         getUsers: getUsersThunkCreator,
//         onPageChanged: onPageChangedThunkCreation})(UsersContainer);

export default compose<React.ComponentType>(
    withAuthRedirect,

    connect(mapStateToProps,
        {
            follow,
            unfollow,
            // setUsers,
            setCurrentPage,
            //setTotalUsersCount,
            // toggleIsFetching,
            //toggleIsFollowingInProcess,
            getUsers: getUsersThunkCreator,
            onPageChanged: onPageChangedThunkCreation})

) (UsersContainer)

























