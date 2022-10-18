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
            <div className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <img src={home} className={style.nav_icon} alt="home"/>
            </div>
        </a>
        <a href="/skills">
            <div className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <img src={skills} className={style.nav_icon} alt="skills"/>
            </div>
        </a>
        <a href="/projects">
            <div className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <img src={portfolio} className={style.nav_icon} alt="portfolio"/>
            </div>
        </a>
        <a href="/contacts">
            <div className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <img src={contacts} className={style.nav_icon} alt="contacts"/>
            </div>
        </a>
    </div>);
}

