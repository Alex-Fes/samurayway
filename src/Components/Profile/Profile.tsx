import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div><div className={classes.content}>
            <div>
                <img
                    src="https://www.imgfinancialgroup.com/sites/default/files/users/imgfinancialgroup/images/001-coastal.jpg" alt=''/>
            </div>
            <div>
                ava + description
            </div>

            <MyPosts />
        </div>
        </div>
    )
}
export default Profile;