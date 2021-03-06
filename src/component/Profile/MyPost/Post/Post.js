import React from 'react';
import s from "./Post.module.css";

function Post(props) {
    return (
        <div className={s.item} >
            <img className={s.postImg}
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBEnWiaC4ufundaNVKl_lcdhJNzxA2_1Jcg&usqp=CAU'}
            />
            <div className={s.text}>
                {props.message}
            </div>
            <div className={s.count}>
                <span>like: {props.likesCount}</span>
            </div>
        </div>


    );
}

export default Post;