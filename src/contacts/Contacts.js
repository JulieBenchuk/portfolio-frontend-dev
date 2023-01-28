import React, {useState} from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/container/container.module.scss"
import {Title} from "../common/components/title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {Slide} from "react-awesome-reveal";
import {useFormik} from "formik";
import axios from 'axios';


export const Contacts = () => {
    const [isLoading, setIsloading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '', email: '', subject: '', message: ''
        }, onSubmit: (values, {resetForm}) => {
            setIsloading(true)

            axios.post("https://gmail-smtp-flame.vercel.app/", {
                name: values.name, email: values.email, subject: values.subject, message: values.message
            })
                .then(() => {
                    alert("Your message has been sent! Thanks for your interest. I will definitely contact you when I have time.")
                    resetForm()
                })
                .catch(() => {
                    alert("Something went wrong... Your message hasn't been sent! Please try again.")
                })
                .finally(() => {
                    setIsloading(false)
                })
        },
    });


    return <div className={style.contactsBlock}>
        <Slide direction={"right"}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title_1st={"Get in"} title_2nd={"touch"} shadow_title={"contact"}/>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={`${style.column} ${style.columnLeft}`}>

                            <h3 className={style.title}>Don't be shy!</h3>

                            <div className={style.meText}>
                                Feel free to get in touch with me. I'm still eager to learn something new, so I'll be honored to grow with your company.
                            </div>

                            <div className={style.mail}>
                                <FontAwesomeIcon icon={faEnvelope} className={style.fa_icon}/>
                                <div className={style.mailMeColumn}>
                                    <span className={style.mailMeTitle}>Mail me</span>
                                    juliebenchuk@gmail.com
                                </div>
                            </div>

                            <div className={style.call}>
                                <FontAwesomeIcon icon={faPhone} className={style.fa_icon}/>
                                <div className={style.callMeColumn}>
                                    <span className={style.callMeTitle}>Call me</span>
                                    +375 44 559 06 60
                                </div>
                            </div>

                            <div className={style.socNetwork}>
                                <a href={"https://www.linkedin.com/in/julie-benchuk-0ab290255/"} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} className={style.fa_icon}/>
                                </a>
                                <a href={"https://github.com/JulieBenchuk"} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className={style.fa_icon}/>
                                </a>
                                <a href={"https://www.t.me/julie_benchuk"} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faTelegram} className={style.fa_icon}/>
                                </a>
                                <a href={"https://www.instagram.com/julie_benchuk/"} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className={style.fa_icon}/>
                                </a>
                            </div>

                        </div>
                        <div className={`${style.column} ${style.columnRight}`}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className={style.contactForm}>
                                    <div className={style.row}>

                                        <div className={style.inputsBlock}>
                                            <div className={style.formColumn}>
                                                <input type="text" placeholder="YOUR NAME" disabled={isLoading}
                                                       className={style.formInput}
                                                       value={formik.values.name} {...formik.getFieldProps("name")}/>
                                            </div>
                                            <div className={style.formColumn}>
                                                <input type="text" placeholder="YOUR EMAIL" disabled={isLoading}
                                                       className={style.formInput}
                                                       value={formik.values.email} {...formik.getFieldProps("email")}/>
                                            </div>
                                            <div className={style.formColumn}>
                                                <input type="text" placeholder="YOUR SUBJECT" disabled={isLoading}
                                                       className={style.formInput}
                                                       value={formik.values.subject} {...formik.getFieldProps("subject")}/>
                                            </div>
                                        </div>

                                        <div className={style.formColumn}>
                                             <textarea placeholder="YOUR MESSAGE" disabled={isLoading}
                                                       className={style.formTextarea}
                                                       value={formik.values.message} {...formik.getFieldProps("message")}/>

                                            <button type={"submit"} className={style.button} disabled={isLoading}>
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
