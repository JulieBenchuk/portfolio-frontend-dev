import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "./../container/container.module.css"
import homeStyle from "../App.module.css";


export const Contacts = () => {
    return <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h1>Get in  <span className={homeStyle.home_color}>touch</span></h1>
        <form className={style.contactsBlock}>
            <input className={style.input} type="text"/>
            <input className={style.input} type="text"/>
            <textarea className={style.textarea}></textarea>
        </form>
        <div className={style.button}>SEND</div>

    </div>;
}
