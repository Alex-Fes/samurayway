import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <div className={classes.posts}>
               <h3>My posts</h3>
                <div className={classes.item}>
                    <div><textarea></textarea></div>
                    <div> <button>Add post</button></div>
                </div>
                <div className={classes.post}>
                <Post message={'Hi, how are you?'} likeCount={15}/>
                <Post message={"Yo yo, what's up"} likeCount={20}/>
                </div>
            </div>
        </div>

    )
}
export default MyPosts;