const ADD_POST='ADD_POST';
const UPDATE_NEW_POST_TEXT='UPDATE_NEW_POST_TEXT';

let initialState= {
    posts: [
        {id: 1, message: "Hi, how are you ?", likesCount: 12},
        {id: 2, message: "Its my first post", likesCount: 3}
    ],
    newPostText: 'it-kama.com'
}

const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:7,
                message:state.newPostText,
                likesCount:0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        default :
            return state
    }

return state
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})



export default  profileReducer;



