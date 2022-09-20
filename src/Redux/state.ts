import {addPostActionCreator, onChangePostActionCreator, profileReducer, setUserProfile} from "./profileReducer";
import {
    addMessageActionCreator,
    dialogReducer,
    DialogType,
    MessageType,
    sendMessageActionCreator
} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from "./usersReducer";
import {RootUserProfileType} from "../Components/Profile/RootUserProfileType";
import {setAuthUserDataAC} from "./authReducer";


type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
    //profile: RootUserProfileType
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {}
export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    sidebar: SidebarType
}

type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _onChange: () => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof onChangePostActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setUserProfile>;

//
// const store: StoreType = {
//     _state: {
//         ProfilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likeCount: 15},
//                 {id: 2, message: 'Yo yo, what\'s up', likeCount: 20},
//                 {id: 3, message: 'Common', likeCount: 10}
//             ],
//             newPostText: '',
//             profile: {}
//         },
//         DialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Alex'},
//                 {id: 2, name: 'Sasha'},
//                 {id: 3, name: 'Yana'},
//                 {id: 4, name: 'Dima'},
//                 {id: 5, name: 'Vetal'}
//             ],
//             message: [
//                 {id: 1, message: 'Hi!'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'Yo Yo'}
//             ],
//             newMessageText: ''
//         },
//         sidebar: {}
//     },
//     dispatch(action) {
//         this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
//         this._state.DialogsPage = dialogReducer(this._state.DialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._onChange();
//     },
//     subscribe(observer) {
//         this._onChange = observer;
//     },
//     _onChange() {
//         console.log('state changed')
//     },
//     getState() {
//         return this._state
//     }
// }


















// let onChange = () => {
// }
//
// export const subscribe = (observer: () => void) => {
//     onChange = observer;
// }
//
// export const addPost = () => {
//     // debugger
//     let newPost: PostType = {
//         id: new Date().getTime(),
//         message: state.ProfilePage.newPostText,
//         likeCount: 0
//     };
//     state.ProfilePage.posts.push(newPost);
//     state.ProfilePage.newPostText = '';
//     onChange();
// };
// export const addMessage = () => {
//     let newMessage: MessageType = {
//         id: new Date().getTime(),
//         message: state.DialogsPage.newMessageText
//     };
//     state.DialogsPage.message.push(newMessage)
//     state.DialogsPage.newMessageText = '';
//     onChange();
// }
// export const changeNewText = (newText: string) => {
//     state.ProfilePage.newPostText = newText;
//     onChange();
// }
// export const changeNewMessageText = (newMessage: string) => {
//     state.DialogsPage.newMessageText = newMessage;
//     onChange();
// }

// export default store;