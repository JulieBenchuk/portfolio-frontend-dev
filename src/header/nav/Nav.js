import React from "react";
import style from "./Nav.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {NavLink, useLocation} from "react-router-dom";

export const Nav = () => {
    const currentRoute = useLocation().pathname;
    return (<div className={style.nav}>
        <NavLink to="main">
            <h2 className={currentRoute.includes("main") ? style.menu_item_active : style.menu_item}>
                <span> HOME </span> <FontAwesomeIcon icon={faHouse} className={style.fa_icon}/>
            </h2>
        </NavLink>
        <NavLink to="skills">
            <h2 className={currentRoute.includes("skills") ? style.menu_item_active : style.menu_item}>
                <span> ABOUT </span> <FontAwesomeIcon icon={faAddressCard} className={style.fa_icon}/>
            </h2>
        </NavLink>
        <NavLink to="projects">
            <h2 className={currentRoute.includes("projects") ? style.menu_item_active : style.menu_item}>
                <span> WORKS </span> <FontAwesomeIcon icon={faBriefcase} className={style.fa_icon}/>
            </h2>
        </NavLink>
        <NavLink to="contacts">
            <h2 className={currentRoute.includes("contacts") ? style.menu_item_active : style.menu_item}>
                <span> CONTACT </span> <FontAwesomeIcon icon={faEnvelope} className={style.fa_icon}/>
            </h2>
        </NavLink>
    </div>);
}

