import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/userPic.png'
import {InitialStateType} from '../../Redux/usersReducer';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    usersPage: InitialStateType
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFollowingInProcess: (isFetching: boolean, followingInProcess: number) => void
    followingInProcess: Array<number>
}


function Users(props: UsersPropsType) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);// округление в большую сторону
    // let pages = [];
    // for(let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }
    let pages = [1, props.currentPage - 1, props.currentPage, props.currentPage + 1, pagesCount]
    if (props.currentPage < 4) {
        pages = [1, 2, 3, 4, pagesCount]
    }
    if (props.currentPage > pagesCount - 2) {
        pages = [1, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]
    }

    return <div>
        <div>
            {pages.map((el, index) => {
                return <span onClick={() => props.onPageChanged(el)}
                             className={props.currentPage === el ? styles.selectPage : ''} key={index}>
                               {el === pagesCount && props.currentPage < pagesCount - 2 && ' ... '}
                    {el}
                    {el === 1 && props.currentPage > 3 && ' ... '}
                           </span>
            })}
        </div>
        {
            props.usersPage.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt="UserPic" className={styles.userPhoto}/>
                            </NavLink>
                </div>
                    <div>{u.followed ? <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingInProcess(true, u.id)
                            usersAPI.unFollowUser(u).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleIsFollowingInProcess(false, u.id);
                            })
                        }}>UnFollow</button>
                        : <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingInProcess(true, u.id)
                            usersAPI.followUser(u).then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.toggleIsFollowingInProcess(false, u.id);
                            })
                        }}>Follow</button>}
                </div>
                </span>
                    <span><span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span><span>
                     <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                </span></span>
                </div>)}
    </div>
}


export default Users;