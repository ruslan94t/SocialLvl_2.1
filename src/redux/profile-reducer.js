const ADD_POST='ADD_POST';


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
            return state
    }

return state
}

export default  profileReducer;



