import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostPropsType} from "./Post/MyPostsContainer";

// type MyPostsPropsType = {
//     newPostText: string
//     posts: PostType[]
//     // dispatch: (action: ActionTypes) => void
//     onChangePost: (text: string) => void
//     addPost: () => void
// }

const MyPosts = (props: MyPostPropsType) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let onAddPost = () => {
        props.addPost();
    };
    const onNewPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch({type: 'CHANGE-NEW-TEXT', newText: e.currentTarget.value})
        let text = e.currentTarget.value
        props.onChangePost(text)
        // props.changeNewTextCallback('')
    }

    return (
        <div className={classes.postsBlock}>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <div className={classes.item}>
                    <div><textarea ref={newPostElement}
                                   value={props.newPostText}
                                   onChange={onNewPostChange}/></div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
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