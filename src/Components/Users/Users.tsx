import React from 'react';
import {InitialStateType} from '../../Redux/usersReducer';
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";

export const Users = (props: UsersPropsType) => {
    return <div>
        <Pagination currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                    totalUserCount={props.totalUserCount}
                    pageSize={props.pageSize}/>

        {props.usersPage.users.map(u =>
            <User key={u.id} user={u}
                  followingInProcess={props.followingInProcess}
                  follow={props.follow}
                  unfollow={props.unfollow}/>
        )}
    </div>
}

type UsersPropsType = {
    usersPage: InitialStateType
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProcess: Array<number>
}
