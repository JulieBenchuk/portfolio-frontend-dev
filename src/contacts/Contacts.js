import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/container/container.module.css"
import {Title} from "../common/components/title/Title";
import {SuperButton} from "../common/components/superButton/SuperButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import Slide from 'react-reveal/Slide';


export const Contacts = () => {
    return <div className={style.contactsBlock}>
        <Slide bottom>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title_1st={"Get in"} title_2nd={"touch"} shadow_title={"contact"}/>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={`${style.column} ${style.columnLeft}`}>
                            <h3 className={style.title}>Don't be shy!</h3>
                            <p className={style.meText}>
                                Feel free to get in touch with me. I am always open to discussing new projects, creative
                                ideas or opportunities to be part of your visions.
                            </p>
                            <p className={style.mail}>
                                <FontAwesomeIcon icon={faEnvelope} className={style.fa_icon}/>
                                <div className={style.mailMeColumn}>
                                    <span className={style.mailMeTitle}>Mail me</span>
                                    juliebenchuk@gmail.com
                                </div>
                            </p>
                            <p className={style.call}>
                                <FontAwesomeIcon icon={faPhone} className={style.fa_icon}/>
                                <div className={style.callMeColumn}>
                                    <span className={style.callMeTitle}>Call me</span>
                                    +375 44 559 06 60
                                </div>
                            </p>
                        </div>
                        <div className={`${style.column} ${style.columnRight}`}>
                            <form>
                                <div className={style.contactForm}>
                                    <div className={style.row}>
                                        <div className={style.inputsBlock}>
                                            <div className={style.formColumn}>
                                                <input type="text" name="name" placeholder="YOUR NAME"
                                                       className={style.formInput}/>
                                            </div>
                                            <div className={style.formColumn}>
                                                <input type="text" name="email" placeholder="YOUR EMAIL"
                                                       className={style.formInput}/>
                                            </div>
                                            <div className={style.formColumn}>
                                                <input type="text" name="subject" placeholder="YOUR SUBJECT"
                                                       className={style.formInput}/>
                                            </div>
                                        </div>
                                        <div className={style.formColumn}>
                                        <textarea name="message" placeholder="YOUR MESSAGE"
                                                  className={style.formTextarea}></textarea>
                                            <SuperButton title={"Send message"}/>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    </div>
}
