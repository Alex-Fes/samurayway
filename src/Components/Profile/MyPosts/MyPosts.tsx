import React, { memo } from 'react'

import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined'
import { Field, reduxForm } from 'redux-form'

import { maxLengthCreator, required } from '../../../utilits/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControl'

import s from './MyPosts.module.css'
import { MyPostPropsType } from './MyPostsContainer'
import Post from './Post/Post'

const MyPosts = memo((props: MyPostPropsType) => {
  let postsElement = [...props.posts].reverse().map(p => {
    return (
      <Post
        message={p.message}
        key={p.id}
        smallAva={props.smallAva}
        fullName={props.fullName}
        likeCount={p.likeCount}
        view={p.view}
      />
    )
  })
  const addNewPost = (newPostText: any) => {
    props.addPost(newPostText.newPost)
  }

  return (
    <div>
      <div className={s.addPost}>
        <AddPostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={s.postsBlock}>{postsElement}</div>
    </div>
  )
})

const maxLength = maxLengthCreator(2000)
const addPostForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.textArea}>
      <div className={s.textField}>
        <Field
          component={Textarea}
          name="newPost"
          placeholder="Enter your text"
          validate={[required, maxLength]}
        />
      </div>
      <div className={s.addPostBtn}>
        <button>
          <PostAddOutlinedIcon />
        </button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: 'addNewPostTextForm' })(addPostForm)

export default MyPosts
