import React from 'react';
import style from "../Skills.module.scss";

export const Achievement = (props) => {
    return (
        <div className={style.achievementItem}>
            <div className={style.achievementItemInner}>
                <h3> {props.amount} </h3>
                <p>
                    {props.subjectStart} <span> {props.subjectEnd} </span>
                </p>
            </div>
        </div>
    );
};
