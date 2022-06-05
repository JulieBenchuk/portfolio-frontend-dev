import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../container/container.module.css";

export const Footer = () => {
    return (
        <div className={`${styleContainer.container} ${style.footer}`}>
            <h3>JULIE BENCHUK</h3>
            <div className={style.elements}>
                <div className={style.elementItem}></div>
                <div className={style.elementItem}></div>
                <div className={style.elementItem}></div>
                <div className={style.elementItem}></div>
                <div className={style.elementItem}></div>
                <div className={style.elementItem}></div>
            </div>
            <p>Copyright © 2022 Meta Platforms, Inc.</p>
        </div>
    );
}

