import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator, onChangePostActionCreator} from "../../../../Redux/profileReduser";
import store from "../../../../Redux/redux-store";
import StoreContext from "../../../../StoreContext";

type MyPostsPropsType = {
    // newPostText: string
    // posts: PostType[]
    // dispatch: (action: ActionTypes) => void
    // store: any
}

const MyPostsContainer = () => {
    // let state = props.store.getState();
    // let postsElement = state.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    // let addPost = () => {
    //     // if (newPostElement.current) {
    //     // props.addPostCallback(newPostElement.current.value)
    //     // props.dispatch({type: 'ADD-POST', newPost: newPostElement.current.value})
    //     props.store.dispatch(addPostActionCreator(state.ProfilePage.newPostText))
    //     // newPostElement.current.value = '';
    // }
    // const onChangePost = (text: string) => {
    //     // props.dispatch({type: 'CHANGE-NEW-TEXT', newText: e.currentTarget.value})
    //    props.store.dispatch(onChangePostActionCreator(text));
    //     // props.changeNewTextCallback('')
    // }
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator(state.ProfilePage.newPostText))
                }
                const onChangePost = (text: string) => {
                    store.dispatch(onChangePostActionCreator(text));
                }
                return <MyPosts onChangePost={onChangePost}
                                addPost={addPost}
                                posts={state.ProfilePage.posts}
                                newPostText={state.ProfilePage.newPostText}/>
            }}
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;