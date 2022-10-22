import React from 'react';
import style from "./SuperButton.module.scss";
import arrow from "../../../assets/img/btn_arrow_right.webp";

export const SuperButton = (props) => {
    return (
        <div className={style.button}>
            <a href={props.url}>
                {props.title}
                <img className={style.button_icon}
                     src={arrow} alt="more"/>
            </a>
        </div>
    );
};