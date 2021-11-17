
import React from "react";
import {connect} from "react-redux";
import MyPost from "./MyPost";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const mapStateToProps=(state)=>{
    return{
       posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostText:(text)=>{
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);


export default MyPostContainer;