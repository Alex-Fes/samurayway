import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

import {PostType} from "../../../Redux/state"

type MyPostsPropsType ={
    posts: PostType[]
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)
    return (
        <div className={classes.postsBlock}>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <div className={classes.item}>
                    <div><textarea></textarea></div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={classes.post}>
                    {postsElement}
                </div>
            </div>
        </div>

    )
}
export default MyPosts;