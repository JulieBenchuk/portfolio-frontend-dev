import React from 'react';
import style from "./Title.module.scss"

export const Title = (props) => {
    return (
        <section className={style.section}>
            <h1 className={style.title}>{props.title_1st + " "}
                <span>
                    {props.title_2nd}
                </span>
                <span className={style.shadow}>
                {props.shadow_title}
            </span>
            </h1>
        </section>
    );
};