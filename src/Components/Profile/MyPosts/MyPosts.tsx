import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={classes.posts}>
                My posts
                <div className={classes.item}>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
              <Post />
              <Post />
              <Post />
              <Post />

                <div>
                    post 2
                </div>

            </div>
        </div>

    )
}
export default MyPosts;