import React, { useEffect } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { useNavigate } from "react-router-dom";


const Dialogs = (props) => {
  
  let state = props.dialogs

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)


  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  let navigate = useNavigate();

  useEffect(() => {
    if(!props.isAuth) {
      navigate('/login');
    }
  }, [])

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>

      <div className={s.messages}>
         <div>{ messagesElements }</div>
         {/* <AddMessageFormRedux onSubmit={addNewMessage} /> */}
         <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}


export default Dialogs;