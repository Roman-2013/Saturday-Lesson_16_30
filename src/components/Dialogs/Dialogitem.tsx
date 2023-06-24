import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
export type DialogItemPropsType={
    id:number
    name:string
}

export const Dialogitem = (props:DialogItemPropsType) => {


    return (
        <NavLink key={props.id} to={`/dialogs/${props.id}`}>
            <li className={s.dialogItem}>{props.name}</li>
        </NavLink>
    )
}



