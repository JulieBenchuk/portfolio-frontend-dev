import React from "react";
import style from "./Description.module.css"
import styleHome from "./../App.module.css"
import styleContainer from "./../container/container.module.css"
import {SuperButton} from "../common/superButton/SuperButton";


export const Description = () => {
    return (<div className={styleContainer.container}>
        <div className={`${style.color_block} ${styleHome.home_bgrd_color}`}/>
        <div className={style.description}>
            <div className={style.avatar_block}>
                <img className={style.avatar} src="https://c.neh.tw/thumb/f/720/comvecteezy227852.jpg" alt="avatar"/>
            </div>
            <div className={style.text}>
                <h1 className={style.text_up}>
                    <div className={styleHome.home_color}>- I'm Julie.</div>
                    <span>Frontend developer</span>
                </h1>
                <p>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model
                    Thorough understanding of React.js and its core principles
                    Prior experience with popular React.js workflows (such as Flux or Redux)
                    Familiarity with more current specifications of EcmaScript
                    Prior experience with data structure libraries (e.g., Immutable.js)
                    Knowledge of isomorphic React is a plus
                    Familiarity with RESTful APIs
                    Familiarity with HTML / CSS
                </p>
                <SuperButton title={"More about me"}/>
            </div>
        </div>
    </div>);
}
