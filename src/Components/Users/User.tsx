import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/userPic.png'
import {UserType} from '../../Redux/usersReducer';
import {NavLink} from "react-router-dom";

export const User = (props: UserPropsType) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                    <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                         alt="UserPic" className={styles.userPhoto}/>
                            </NavLink>
                </div>
                    <div>{props.user.followed ?
                        <button disabled={props.followingInProcess.some(id => id === props.user.id)} onClick={() => {
                            props.unfollow(props.user.id)
                        }}>UnFollow</button>
                        : <button disabled={props.followingInProcess.some(id => id === props.user.id)} onClick={() => {
                            props.follow(props.user.id)
                        }}>Follow</button>}
                </div>
                </span>
        <span>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </span>
        <span>
                     <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                </span>

    </div>
}

type UserPropsType = {
    user: UserType
    followingInProcess: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void
    key: number

}
