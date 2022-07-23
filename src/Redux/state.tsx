export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}
export type DialogsPageType = {
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
// export let state: RootStateType = {
//     ProfilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likeCount: 15},
//             {id: 2, message: 'Yo yo, what\'s up', likeCount: 20},
//             {id: 3, message: 'Common', likeCount: 10}
//         ],
//         newPostText: ''
//     },
//     DialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Alex'},
//             {id: 2, name: 'Sasha'},
//             {id: 3, name: 'Yana'},
//             {id: 4, name: 'Dima'},
//             {id: 5, name: 'Vetal'}
//         ],
//         message: [
//             {id: 1, message: 'Hi!'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'Yo Yo'}
//         ],
//         newMessageText: ''
//     },
//     sidebar: {}
// }

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _onChange: () => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
export type AddPostActionType = {
    type: 'ADD-POST'
    newPost: string
}
// export type AddPostActionType = ReturnType<typeof addPostCreateAction>


export type ActionTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof onChangePostActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof addMessageActionCreator>;


const store: StoreType = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 15},
                {id: 2, message: 'Yo yo, what\'s up', likeCount: 20},
                {id: 3, message: 'Common', likeCount: 10}
            ],
            newPostText: ''
        },
        DialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Yana'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Vetal'}
            ],
            message: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo Yo'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.ProfilePage.newPostText,
                likeCount: 0
            };
            this._state.ProfilePage.posts.push(newPost);
            this._state.ProfilePage.newPostText = '';
            this._onChange();
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: this._state.DialogsPage.newMessageText
            };
            this._state.DialogsPage.message.push(newMessage)
            this._state.DialogsPage.newMessageText = '';
            this._onChange();
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.ProfilePage.newPostText = action.newText;
            this._onChange();
        } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
            this._state.DialogsPage.newMessageText = action.newMessage;
            this._onChange();
        }
    },
    subscribe(observer) {
        this._onChange = observer;
    },
    _onChange() {
        console.log('state changed')
    },
    getState() {
        return this._state
    }
}

export const addPostActionCreator = (newPost: string) =>
    ({type: 'ADD-POST', newPost: newPost}) as const;
export const onChangePostActionCreator = (newText: string) =>
    ({type: "CHANGE-NEW-TEXT", newText: newText}) as const;
export const sendMessageActionCreator = (newMessage: string) =>
     ({type: 'ADD-MESSAGE', newMessage: newMessage}) as const;
export const addMessageActionCreator = (newMessage: string) =>
    ({type: "CHANGE-NEW-MESSAGE-TEXT", newMessage: newMessage}) as const;


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

export default store;