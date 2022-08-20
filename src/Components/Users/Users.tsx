import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/userPic.png'

function Users(props: UsersPropsType) {
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    return <div>
        {
            props.usersPage.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt="" className={styles.userPhoto}/>
                </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                     <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                </span>
                </span>
                </div>)}
    </div>

}

export default Users;