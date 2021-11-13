import React from 'react';
import s from './Messages.module.css';






function Messages(props) {
    return (

            <div className={s.message}>
              <div>{props.message}</div>

            </div>
    );
}

export default Messages;