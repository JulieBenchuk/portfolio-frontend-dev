import React from 'react';
import style from "./Project.module.css"


export const Project = () => {
    return (
        <div className={style.projectItem}>
            <div className={style.top}>
                <div className={style.button}>Button</div>
            </div>
            <div className={style.description}>
                <h4>Name of project</h4>
                <p>Description</p>
            </div>
        </div>
    );
};
