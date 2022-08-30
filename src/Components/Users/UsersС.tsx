import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/userPic.png'
import {setTotalUsersCountAC} from "../../Redux/usersReduser";


class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCountAC(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);// округление в большую сторону
        // let pages = [];
        // for(let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }
        let pages = [1, this.props.currentPage - 1, this.props.currentPage, this.props.currentPage + 1, pagesCount]
        if (this.props.currentPage < 4) {
            pages = [1, 2, 3, 4, pagesCount]
        }
        if (this.props.currentPage > pagesCount - 2) {
            pages = [1, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]
        }

        return <div>
            <div>
                {pages.map(el => {
                    return <span onClick={() => this.onPageChanged(el)}
                                 className={this.props.currentPage === el ? styles.selectPage : ''}>
                               {el === pagesCount && this.props.currentPage < pagesCount - 2 && ' ... '}
                        {el}
                        {el === 1 && this.props.currentPage > 3 && ' ... '}
                           </span>
                })}
            </div>
            {
                this.props.usersPage.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt="" className={styles.userPhoto}/>
                </div>
                    <div>{u.followed ?
                        <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
}

export default Users;