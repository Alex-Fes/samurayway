import React from "react";
import classes from "./Post.module.css";

type MessagePropsType = {
    message: string
    likeCount: number
}
// let posts = [
//     {id: 1, message: 'Hi, how are you?', likeCount: 15},
//     {id: 2, message: 'Yo yo, what\'s up', likeCount: 20},
//     {id: 3, message: 'Common', likeCount: 10}
// ];

const Post = (props: MessagePropsType) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://s00.yaplakal.com/pics/pics_original/8/3/6/1343638.jpg' alt=''/>
                {props.message}

            </div>
            <div>
                <span>{props.likeCount} Like</span>
            </div>

        </div>

    )
}
export default Post;