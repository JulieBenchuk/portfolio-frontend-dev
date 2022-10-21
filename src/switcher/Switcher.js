import React from 'react';
import style from "./Switcher.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";


export const Switcher = () => {
    const onSwitchClickHandler = () => {
        console.log("change color")
    }
    return (
        <div className={style.switcher} onClick={onSwitchClickHandler}>
            <FontAwesomeIcon icon={faGear} className={style.spin}/>
        </div>
    );
};
