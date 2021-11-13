import React from 'react';
import s from './Header.module.css'






function Header(props) {
    return (
        <header className={s.header}>
            <img
                className={s.imgLogo}
                src='https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png'
            />
        </header>
    );
}

export default Header;