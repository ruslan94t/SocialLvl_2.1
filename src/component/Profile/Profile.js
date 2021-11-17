import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";



function Profile(props) {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostContainer />

        </div>
    );
}

export default Profile;