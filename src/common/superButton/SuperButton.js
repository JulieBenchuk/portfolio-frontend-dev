import React from 'react';
import style from "./SuperButton.module.css";
import styleHome from "../../App.module.css";
import arrow from "../../assets/img/btn_arrow_right.webp";

export const SuperButton = (props) => {
    return (
        <div className={`${style.button} ${styleHome.home_btn_border}`}>
            <a href={props.url} className={style.btn_ref}>
                {props.title}
                <img className={`${style.button_icon} ${styleHome.home_bgrd_color}`}
                     src={arrow} alt="more"/>
            </a>
        </div>
    );
};