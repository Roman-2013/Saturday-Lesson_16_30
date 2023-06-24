import React from 'react';
import s from './Dialogs.module.css';
type MessagesElementPropsType={
    id:number
    message:string
}


const DialogMessageData = (props:MessagesElementPropsType) => {
    return (
            <li key={props.id} className={s.messagesItem}>{props.message}</li>

    );
};

export default DialogMessageData;