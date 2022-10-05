import React from 'react';
import homeStyle from "../../App.module.css";
import style from "./Title.module.css"

export const Title = (props) => {
    return (
        <section className={style.section}>
            <h1 className={style.title}>{props.title_1st + " "}
                <span className={homeStyle.home_color}>
                    {props.title_2nd}
                </span>
                <span className={style.shadow}>
                {props.shadow_title}
            </span>
            </h1>
        </section>
    );
};