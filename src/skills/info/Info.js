import React from 'react';
import style from "../Skills.module.scss";

export const Info = (props) => {
    return (
        <li>
            {props.title && <span className={style.titleInfo}> {props.title}: </span>}
            <span className={style.valueInfo}>{props.value} </span>
        </li>
    );
};
