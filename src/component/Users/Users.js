import React from "react";

import userPhoto from "../../assets/image/user.png";
import s from './Users.module.css'



const Users = (props)=>{

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for(let i =1; i< pagesCount; i++){
        pages.push(i)
    }

    return(<div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectodPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    >
                            {p}
                        </span>
                })
            }

        </div>
        <div className={s.box}>

            {
                props.users.map(u=>{
                    return(
                        <div className={s.box_item}>
                            <img className={s.userPhoto}
                                 src={u.photos.small !== null ?u.photos.small:userPhoto}
                                 alt=""/>
                            <div className={s.box_item__info}>
                                <div>
                                    {
                                        u.followed
                                    ? <button
                                        onClick={()=>{
                                        props.unfollow(u.id)
                                        }}>
                                            Unfollow
                                        </button>:
                                            <button onClick={() => {
                                                props.follow(u.id)
                                            }}>Follow</button>

                                    }

                                </div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    </div>)
}


export default Users;