import React from 'react';
import style from "./Project.module.scss"


export const Project = (props) => {
    return (
        <div className={style.projectItem}>
            <div style={props.style} className={style.image}>
                <div className={style.button}>
                    <a href={props.url} target="_blank" className={style.btn_ref}>See more</a>
                </div>
            </div>
            <div className={style.description}>
                <h5 className={style.title}>{props.name}</h5>
                <p className={style.description_text}>{props.shortDescription}</p>
            </div>
        </div>
    );
};
