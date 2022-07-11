import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

import {PostType} from "../../../Redux/state"

type MyPostsPropsType = {
    posts: PostType[]
    addPostCallback: (postMessage: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        // debugger
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current.value)
            newPostElement.current.value = '';
        }
    };

    return (
        <div className={classes.postsBlock}>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <div className={classes.item}>
                    <div><textarea ref={newPostElement}></textarea></div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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