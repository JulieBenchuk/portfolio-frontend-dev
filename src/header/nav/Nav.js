import React from "react";
import style from "./Nav.module.css"
import homeStyle from "./../../App.module.css"
import home from "../../assets/img/nav_home.svg"
import contacts from "../../assets/img/nav_contacts.svg"
import portfolio from "../../assets/img/nav_portfolio.svg"
import skills from "../../assets/img/nav_skills.svg"

export const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <a href="">
                    <img src={home}  className={style.nav_icon} alt="home"/>
                </a>
            </div>
            <div className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <a href="">
                    <img src={skills}  className={style.nav_icon} alt="skills"/>
                </a>
            </div>
            <div className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <a href="">
                    <img src={portfolio}  className={style.nav_icon} alt="portfolio"/>
                </a>
            </div>
            <div className={`${style.menu_item} ${homeStyle.home_bgrd_color}`}>
                <a href="">
                    <img src={contacts}  className={style.nav_icon} alt="contacts"/>
                </a>
            </div>
        </div>
    );
}

