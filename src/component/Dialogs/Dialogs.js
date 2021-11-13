import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";





function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
             <DialogItem name={'Sasha'}/>
             <DialogItem name={'Yulya'}/>
             <DialogItem name={'Kristina'}/>

            </div>
            <div className={s.messages}>
                <div className={s.messagesContainer}>
                  <Messages message={'hi'} />
                  <Messages message={'how'} />
                  <Messages message={'you'} />
                </div>
                <div>
                    <div
                        className={s.textAreaBox}>
                        <textarea

                        />

                    </div>
                    <div className={s.buttonBox}>
                        <button>Send</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;