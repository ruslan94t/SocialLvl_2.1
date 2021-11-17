import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";





function Dialogs(props) {
    let state = props.dialogsPage;
    let dialogElements=state.dialogs
        .map(d=> <DialogItem key={d.id} name={d.name} id={d.id} />)

    let messageElements=state.messages
        .map(m=><Messages  key={m.id}  id={m.id} message={m.message}/>)
let newMessageBody = state.newMessageBody;

const onSendMessageClick=()=>{
        props.onSendMessageClick()
}

const onNewMessageChange= e =>{
        let body =e.target.value;
        props.updateNewMessageBody(body)
}


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                <div className={s.messagesContainer}>
                    {messageElements}
                </div>
                <div>
                    <div
                        className={s.textAreaBox}>
                        <textarea

                             placeholder="enter your message"
                             value={newMessageBody}
                             onChange={onNewMessageChange}
                        />

                    </div>
                    <div className={s.buttonBox}>
                        <button
                        onClick={onSendMessageClick}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;