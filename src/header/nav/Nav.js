import React from "react";
import style from "./Nav.module.css"
import homeStyle from "./../../App.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
    return (<div className={style.nav}>
        <a href="/main">
            <h2 className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <span> HOME </span> <FontAwesomeIcon icon={faHouse} className={style.fa_icon}/>
            </h2>
        </a>
        <a href="/skills">
            <h2 className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <span> ABOUT </span> <FontAwesomeIcon icon={faAddressCard} className={style.fa_icon}/>
            </h2>
        </a>
        <a href="/projects">
            <h2 className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <span> WORKS </span> <FontAwesomeIcon icon={faBriefcase} className={style.fa_icon}/>
            </h2>
        </a>
        <a href="/contacts">
            <h2 className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <span> CONTACT </span> <FontAwesomeIcon icon={faEnvelope} className={style.fa_icon}/>
            </h2>
        </a>
    </div>);
}

