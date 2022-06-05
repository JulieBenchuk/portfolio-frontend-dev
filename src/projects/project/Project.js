import React from 'react';
import style from "./Project.module.css"


export const Project = (props) => {
    return (
        <div className={style.projectItem}>
            <div className={style.top}>
                <div className={style.button}>Button</div>
            </div>
            <div className={style.description}>
                <h4>{props.name}</h4>
                <p>{props.shortDescription}</p>
            </div>
        </div>
    );
};
