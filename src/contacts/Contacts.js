import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/container/container.module.scss"
import {Title} from "../common/components/title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Slide from 'react-reveal/Slide';
import {useFormik} from "formik";
import axios from 'axios';


export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '', email: '', subject: '', message: ''
        }, onSubmit: (values, {resetForm}) => {

            axios.post("https://myportfolio-smtp-server.herokuapp.com/", {
                name: JSON.stringify(values.name),
                email: JSON.stringify(values.email),
                subject: JSON.stringify(values.subject),
                message: JSON.stringify(values.message)
            })
                .then(() => {
                    alert("Your message has been sent! Thanks for your interest. I will definitely contact you when I have time.")
                    resetForm()
                })
        },
    });


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
                            <form onSubmit={formik.handleSubmit}>
                                <div className={style.contactForm}>
                                    <div className={style.row}>

                                        <div className={style.inputsBlock}>
                                            <div className={style.formColumn}>
                                                <input type="text" placeholder="YOUR NAME"
                                                       className={style.formInput}
                                                       value={formik.values.name} {...formik.getFieldProps("name")}/>
                                            </div>
                                            <div className={style.formColumn}>
                                                <input type="text" placeholder="YOUR EMAIL"
                                                       className={style.formInput}
                                                       value={formik.values.email} {...formik.getFieldProps("email")}/>
                                            </div>
                                            <div className={style.formColumn}>
                                                <input type="text" placeholder="YOUR SUBJECT"
                                                       className={style.formInput}
                                                       value={formik.values.subject} {...formik.getFieldProps("subject")}/>
                                            </div>
                                        </div>

                                        <div className={style.formColumn}>
                                             <textarea placeholder="YOUR MESSAGE"
                                                       className={style.formTextarea}
                                                       value={formik.values.message} {...formik.getFieldProps("message")}/>

                                            <button type={"submit"} className={style.button}>
                                                <span>Send message</span>
                                                <FontAwesomeIcon icon={faPaperPlane} className={style.button_icon}/>
                                            </button>

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
