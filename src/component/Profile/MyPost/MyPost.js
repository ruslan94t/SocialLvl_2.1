import React from 'react';
import s from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost(props) {
    return (
        <div className={s.myPost}>
            <div className={s.myPostInput}>
                <textarea  className={s.area}/>
                <button className={s.btnSend}>send</button>
            </div>
            <div className={s.posts}>
               <Post />
               <Post />
               <Post />
            </div>

        </div>
    );
}

export default MyPost;