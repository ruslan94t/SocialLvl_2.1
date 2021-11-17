

import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const mapStateToProps=(state)=>{
return{
 dialogsPage:state.dialogsPage
}
}
const mapDispatchToProps=(dispatch)=>{
return{
    updateNewMessageBody:(body)=>{
        dispatch(updateNewMessageBodyCreator(body))
    },
    onSendMessageClick:()=>{
        dispatch(sendMessageCreator())
    }
}
}

  const DialogsContainer  = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;