import React from "react";
import classes from "./Posts.module.css";

const Post = () => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://s00.yaplakal.com/pics/pics_original/8/3/6/1343638.jpg' alt=''/>
                post 1

            </div>
            <div>
                <span>Like</span>
            </div>

        </div>

    )
}
export default Post;