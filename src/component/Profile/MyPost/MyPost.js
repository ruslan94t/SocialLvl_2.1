import React from 'react';
import s from "./MyPost.module.css";
import Post from "./Post/Post";

function MyPost(props) {
   ;
    let postElements =props.posts
        .map(p=> <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

let newPostElement = React.createRef();

    const onAddPost=()=>{
        props.addPost();
    }

    const onPostChange = ()=>{
        let text =newPostElement.current.value;
        props.updateNewPostText(text)
    }


    return (
        <div className={s.myPost}>
            <div className={s.myPostInput}>
                <textarea
                    className={s.area}
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}

                />
                <button className={s.btnSend}
                  onClick={onAddPost}
                >
                    send
                </button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>

        </div>
    );
}

export default MyPost;