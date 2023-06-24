import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Dialogitem, DialogItemPropsType} from './Dialogitem';
import DialogMessageData from './DialogMessageData';


export type DialogPropsType={
    dialogsData:DialogItemPropsType[]
    messagesData:messagesDataType[]
}
export type messagesDataType={
    id:number
    message:string
}

export const Dialogs:FC <DialogPropsType> = ({dialogsData,messagesData}) => {


    const dialogsElement=dialogsData.map((item)=> {
        return <Dialogitem id={item.id} name={item.name}/>
    })

    const mesagesElement=messagesData.map((el)=>{
        return <DialogMessageData id={el.id} message={el.message}/>
    })
    return (
        <div className={s.dialogsWrapperContent}>
        <div className={s.dialogWrapper}>
            <ul className={s.dialogList}>
                {dialogsElement}
            </ul>
        </div>

        <div className={s.messagesWrapper}>
            <ul className={s.messagesList}>
                {mesagesElement}
                {/*<li className={s.messagesItem}>Hello, how are you?</li>*/}
                {/*<li className={s.messagesItem}>Im fine, thx</li>*/}
                {/*<li className={s.messagesItem}>Okay</li>*/}
        </ul>
    </div>
        </div>
    );
};

