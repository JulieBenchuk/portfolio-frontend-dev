import React from 'react';
import style from "./SuperButton.module.scss";
import arrow from "../../../assets/img/btn_arrow_right.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const SuperButton = (props) => {
    return (
        <div className={style.button}>
            <a href={props.url}>
                {props.title}
                <FontAwesomeIcon icon={props.icon} className={style.button_icon}/>
            </a>
        </div>
    );
};