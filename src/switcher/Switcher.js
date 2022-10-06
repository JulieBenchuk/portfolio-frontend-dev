import React from 'react';
import style from "./Switcher.module.css"
import spinner from "./../assets/img/settings.svg"


export const Switcher = () => {
    const onSwitchClickHandler = ()=> {
        console.log("change color")
    }
    return (
        <div className={style.switcher} onClick={onSwitchClickHandler}>
            <img src={spinner} alt="spinner" className={style.spin}/>
        </div>
    );
};
