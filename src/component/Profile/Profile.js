import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPost/MyPost";


function Profile(props) {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPost/>

        </div>
    );
}

export default Profile;