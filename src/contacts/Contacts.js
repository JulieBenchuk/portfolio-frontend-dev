import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "./../container/container.module.css"
import {Title} from "../common/title/Title";


export const Contacts = () => {
    return <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Title title_1st={"Get in"} title_2nd={"touch"} shadow_title={"contact"}/>
        <div className={style.contactsBlock}>
            <form>
                <input className={style.input} type="text"/>
                <input className={style.input} type="text"/>
                <textarea className={style.textarea}></textarea>
            </form>
        </div>
        <div>
            <div className={style.button}>SEND</div>
        </div>

    </div>;
}
