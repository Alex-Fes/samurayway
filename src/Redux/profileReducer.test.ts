import { addPostActionCreator, deletePostAC, PostType, profileReducer } from './profileReducer'

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: "Yo yo, what's up", likeCount: 20 },
    { id: 3, message: 'Common', likeCount: 10 },
  ] as Array<PostType>,
  // newPostText: '',
  profile: {
    aboutMe: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: '',
    },
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: 0,
    photos: {
      small: '',
      large: '',
    },
  },
  status: '',
}

it('length of post should be incremented', () => {
  let action = addPostActionCreator('Samurai Way')
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(4)
})

it('message of new post should be correct', () => {
  let action = addPostActionCreator('Samurai Way')
  let newState = profileReducer(state, action)

  expect(newState.posts[3].message).toBe('Samurai Way')
})

it('after deleting length of messages should be decrement', () => {
  let action = deletePostAC(1)
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(2)
})

it(`after deleting length of messages shouldn't  be decrement if id is incorrect`, () => {
  let action = deletePostAC(222)
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
})
