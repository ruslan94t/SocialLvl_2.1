import React from 'react';
import s from './Navbar.module.css'


function Navbar(props) {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Dialog</a>
            </div>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Setings</a>
            </div>

        </nav>
    );
}

export default Navbar;