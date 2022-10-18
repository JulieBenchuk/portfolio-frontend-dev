import React from "react";
import style from "./Nav.module.css"
import homeStyle from "./../../App.module.css"
import home from "../../assets/img/nav_home.svg"
import contacts from "../../assets/img/nav_contacts.svg"
import portfolio from "../../assets/img/nav_portfolio.svg"
import skills from "../../assets/img/nav_skills.svg"

export const Nav = () => {
    return (<div className={style.nav}>
        <a href="/description">
            <h2 className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <img src={home} className={style.nav_icon} alt="home"/>
            </h2>
        </a>
        <a href="/skills">
            <h2 className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <img src={skills} className={style.nav_icon} alt="skills"/>
            </h2>
        </a>
        <a href="/projects">
            <h2 className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <img src={portfolio} className={style.nav_icon} alt="portfolio"/>
            </h2>
        </a>
        <a href="/contacts">
            <h2 className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <img src={contacts} className={style.nav_icon} alt="contacts"/>
            </h2>
        </a>
    </div>);
}

