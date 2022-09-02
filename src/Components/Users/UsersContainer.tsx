import React from 'react';
import {connect} from 'react-redux';
import {StoreType} from '../../Redux/redux-store';
import {
    follow,
    InitialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType
} from '../../Redux/usersReducer';
import axios from 'axios';
import Users from './Users';
import {Preloader} from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (currentCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToProps;

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        // let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);// округление в большую сторону
        // // let pages = [];
        // // for(let i = 1; i <= pagesCount; i++) {
        // //     pages.push(i)
        // // }
        // let pages = [1, this.props.currentPage - 1, this.props.currentPage, this.props.currentPage + 1, pagesCount]
        // if (this.props.currentPage < 4) {
        //     pages = [1, 2, 3, 4, pagesCount]
        // }
        // if (this.props.currentPage > pagesCount - 2) {
        //     pages = [1, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]
        // }

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
            />
        </>
        // <div>
        //     <div>
        //         {pages.map(el => {
        //             return <span onClick={() => this.onPageChanged(el)}
        //                          className={this.props.currentPage === el ? styles.selectPage : ''}>
        //                        {el === pagesCount && this.props.currentPage < pagesCount - 2 && ' ... '}
        //                 {el}
        //                 {el === 1 && this.props.currentPage > 3 && ' ... '}
        //                    </span>
        //         })}
        //     </div>
        //     {this.props.usersPage.users.map(u =>
        //             <div key={u.id}>
        //         <span>
        //             <div>
        //             <img src={u.photos.small != null ? u.photos.small : userPhoto}
        //                  alt="" className={styles.userPhoto}/>
        //         </div>
        //             <div>{u.followed ?
        //                 <button onClick={() => {
        //                     this.props.unfollow(u.id)
        //                 }}>UnFollow</button>
        //                 : <button onClick={() => {
        //                     this.props.follow(u.id)
        //                 }}>Follow</button>}
        //         </div>
        //         </span>
        //                 <span><span>
        //                 <div>{u.name}</div>
        //                 <div>{u.status}</div>
        //             </span><span>
        //              <div>{'u.location.country'}</div>
        //                 <div>{'u.location.city'}</div>
        //         </span></span>
        //             </div>)}
        // </div>
    }
}

let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);