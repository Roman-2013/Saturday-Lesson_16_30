import {MyPostType} from '../components/Profile/Profile';

type postType = {
    id: number
    title: string
    like: number
    post: string
}
export type ProfilePage = {
    posts: postType[]
}


type dialogsDatatype = {
    id: number
    name: string
}
type messagesData = {
    id: number
    message: string
}

type DialogPAgeType = {
    dialogsData: Array<dialogsDatatype>
    messagesData: Array<messagesData>
}

export type StateType = {
    profalePage: ProfilePage
    dialogsPage: DialogPAgeType
}


export const state: StateType = {
    profalePage: {
        posts: [
            {id: 1, title: 'first post', like: 4, post: 'how are you'},
            {id: 2, title: 'second post', like: 5, post: 'how are you'},
            {id: 3, title: 'second post', like: 5, post: 'how are you'},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'pasha'},
            {id: 2, name: 'sacha'},
            {id: 3, name: 'dima'},
            {id: 4, name: 'egor'},
            {id: 5, name: 'jora'},
        ],
        messagesData: [
            {id: 1, message: 'Hello, how are you?'},
            {id: 1, message: 'Im fine, thx'},
            {id: 1, message: 'Okay'},
            {id: 1, message: 'Okay'},
            {id: 1, message: 'Okay'},
            {id: 1, message: 'Okay'},
        ],
    }
}



