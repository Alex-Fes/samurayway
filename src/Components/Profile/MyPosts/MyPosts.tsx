import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


export type MyPostsPropsType = {
    id:number
    message:string
    likeCount: number
}
let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 15},
    {id: 2, message: 'Yo yo, what\'s up', likeCount: 20},
    {id: 3, message: 'Common', likeCount: 10}
];
let postsElement = posts.map(p =>  <Post message={p.message} likeCount={p.likeCount}/>)

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
                    {postsElement}
                </div>
            </div>
        </div>

    )
}
export default MyPosts;