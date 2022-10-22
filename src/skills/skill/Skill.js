import React from 'react';
import style from "./Skill.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Skill = (props) => {
    return (
        <div className={style.skillItem}>
            <div className={style.icon}>
                {props.icon
                    ? <FontAwesomeIcon icon={props.icon} className={style.fa_icon}/>
                    : props.icon_svg}
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};
