import React from 'react'

import { Field, reduxForm } from 'redux-form'

import { maxLengthCreator, required } from '../../../utilits/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControl'

import classes from './MyPosts.module.css'
import { MyPostPropsType } from './Post/MyPostsContainer'
import Post from './Post/Post'

const MyPosts = React.memo((props: MyPostPropsType) => {
  let postsElement = [...props.posts]
    .reverse()
    .map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id} />)
  const addNewPost = (newPostText: any) => {
    props.addPost(newPostText.newPost)
  }

  return (
    <div className={classes.postsBlock}>
      <div className={classes.posts}>
        <h3>My posts</h3>
        <div className={classes.item}>
          <AddPostFormRedux onSubmit={addNewPost} />
        </div>
        <div className={classes.post}>{postsElement}</div>
      </div>
    </div>
  )
})

const maxLength = maxLengthCreator(10)
const addPostForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPost"
          placeholder="Enter your text"
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: 'addNewPostTextForm' })(addPostForm)

export default MyPosts
