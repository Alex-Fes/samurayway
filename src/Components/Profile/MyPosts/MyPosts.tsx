import React, { memo } from 'react'

import { Field, reduxForm } from 'redux-form'

import { maxLengthCreator, required } from '../../../utilits/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControl'

import s from './MyPosts.module.css'
import { MyPostPropsType } from './Post/MyPostsContainer'
import Post from './Post/Post'

const MyPosts = memo((props: MyPostPropsType) => {
  let postsElement = [...props.posts].reverse().map(p => {
    return (
      <div key={p.id} className={s.post}>
        <Post message={p.message} key={p.id} />
      </div>
    )
  })
  const addNewPost = (newPostText: any) => {
    props.addPost(newPostText.newPost)
  }

  return (
    <div>
      <div className={s.postsBlock}>
        <div className={s.addPost}>
          <AddPostFormRedux onSubmit={addNewPost} />
        </div>
      </div>
      <div className={s.posts}>
        <div className={s.postHead}>
          <img src={props.smallAva} alt="Avatar" />
          <h3>{props.fullName}</h3>
        </div>
        {postsElement}
        <div className={s.postFooter}></div>
      </div>
    </div>
  )
})

const maxLength = maxLengthCreator(10)
const addPostForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.textArea}>
      <div>
        <Field
          component={Textarea}
          name="newPost"
          placeholder="Enter your text"
          validate={[required, maxLength]}
        />
      </div>
      <div className={s.addPostBtn}>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: 'addNewPostTextForm' })(addPostForm)

export default MyPosts
