import React from 'react';
import style from "./SuperButton.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const SuperButton = (props) => {
    return (
        <div className={style.button}>
            <a href={props.id}>
                <span>{props.title}</span>
                <FontAwesomeIcon icon={props.icon} className={style.button_icon}/>
            </a>
        </div>
    );
};