import React from "react";
import style from "./description.module.css"


export const Description = () => {
    return (
        <div className={style.description}>
            <span className={style.photo}>
                Photo
                <img src="./../img/2022-03-11%2013.55.34.jpg"/>
            </span>
            <span className={style.text}>Text</span>
        </div>
    );
}
