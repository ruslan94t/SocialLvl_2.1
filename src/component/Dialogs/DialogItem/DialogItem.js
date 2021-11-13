import React from 'react';
import s from './DialogItem.module.css';


function DialogItem(props) {
    return (


            <div className={s.dialogsItem}>
                <a>{props.name}</a>
            </div>


    );
}

export default DialogItem;