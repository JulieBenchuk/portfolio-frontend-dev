import React from 'react';
import style from "./SuperButton.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";


export const SuperButton = (props) => {
    return (
        <div className={style.button}>
            <NavLink to={props.id}>
                <span>{props.title}</span>
                <FontAwesomeIcon icon={props.icon} className={style.button_icon}/>
            </NavLink>
        </div>
    );
};