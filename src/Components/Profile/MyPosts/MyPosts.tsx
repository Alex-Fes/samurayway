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
                <Post message={'Hi, how are you?'} likeCount={15}/>
                <Post message={"Yo yo, what's up"} likeCount={20}/>
            </div>
        </div>

    )
}
export default MyPosts;