import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

import {ActionTypes, addPostActionCreator, onChangePostActionCreator, PostType} from "../../../Redux/state"

type MyPostsPropsType = {
    newPostText: string
    posts: PostType[]
    dispatch: (action: ActionTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            // props.addPostCallback(newPostElement.current.value)
            // props.dispatch({type: 'ADD-POST', newPost: newPostElement.current.value})
            props.dispatch(addPostActionCreator(props.newPostText))
            // newPostElement.current.value = '';
        }
    };
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch({type: 'CHANGE-NEW-TEXT', newText: e.currentTarget.value})
        props.dispatch(onChangePostActionCreator(e.currentTarget.value))
        // props.changeNewTextCallback('')
    }
    return (
        <div className={classes.postsBlock}>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <div className={classes.item}>
                    <div><textarea ref={newPostElement} value={props.newPostText} onChange={onChangePost}/></div>
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