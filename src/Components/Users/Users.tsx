import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'

function Users(props: UsersPropsType) {
    if( props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://sun9-north.userapi.com/sun9-82/s/v1/ig2/LROrPaiL5M9MDIn3dvuwdP-LpBDBKFycjt-jrUJ2DSAfO3fSNsYtoK9YfL2XCterfx9ws39oOpx4ELSZn1QluH3Q.jpg?size=200x200&quality=95&crop=594,953,1157,1157&ava=1',
                followed: true,
                fullName: 'Alex',
                status: 'I will be in IT',
                location: {city: 'SPb', country: 'Russia'}
            },
            {
                id: 2,
                photoURL: 'https://sun9-west.userapi.com/sun9-9/s/v1/ig1/jMk1rN_OhY1TKz8NRED2eMMg_X6Dd9r9QC2H4pCDN_ODKub7Is-HA4m4oJkz-R10EjjpJINn.jpg?size=200x200&quality=96&crop=1,305,1000,1000&ava=1',
                followed: false,
                fullName: 'Vova',
                status: 'Looking for a summer',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoURL: 'https://sun9-west.userapi.com/sun9-38/s/v1/ig2/DMX_Z2Vudm0oDXStlp6tim8jE6VBC-xpC4tqXMi-CiX3pirE-qnaolAPjwUmbZyJzslq5-MkmIdg2Gsa4-iQootG.jpg?size=200x200&quality=96&crop=0,0,1358,1358&ava=1',
                followed: true,
                fullName: 'Yana',
                status: 'Pretty miss',
                location: {city: 'SPb', country: 'Russia'}
            },
            {
                id: 4,
                photoURL: 'https://sun9-west.userapi.com/sun9-47/s/v1/ig2/h2cScXNKbiTWinCH-xpfZbPdwbl0vfZo-3I6XdfBIGfy9JA9d8Ka3ErNdj0YyHijmTXcVhSlK2PWEXzd6txFGa12.jpg?size=200x200&quality=95&crop=263,99,546,546&ava=1',
                followed: true,
                fullName: 'Kseniya',
                status: 'Happy mom',
                location: {city: 'Feodosia', country: 'Crimea'}
            }])
    }

    return <div>
        {
            props.usersPage.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoURL} alt="" className={styles.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                     <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                </span>
                </span>
                </div>)}
    </div>

}

export default Users;