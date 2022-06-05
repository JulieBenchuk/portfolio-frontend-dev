import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "./../container/container.module.css"


export const Contacts = () => {
    return <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h2 className={style.title}>Contacts</h2>
        <form className={style.contactsBlock}>
            <input className={style.input} type="text"/>
            <input className={style.input} type="text"/>
            <textarea className={style.textarea}></textarea>
        </form>
        <div className={style.button}>Button</div>

    </div>;
}
