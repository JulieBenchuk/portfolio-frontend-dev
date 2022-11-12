import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../common/styles/container/container.module.scss"
import {SuperButton} from "../common/components/superButton/SuperButton";
import avatar from "./../assets/img/avatar.jpg";
import {ParticlesContainer} from "../common/styles/particles/Particles";
import {Slide} from "react-awesome-reveal";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


export const Main = () => {
    return (<div className={styleContainer.container} id={"main"}>
        <ParticlesContainer/>
        <div className={style.color_block}/>
        <Slide direction={"left"}>
            <div className={style.description}>
                <div className={style.avatar_block}>
                    <img className={style.avatar} src={avatar} alt="avatar"/>
                </div>
                <div className={style.text}>
                    <h1 className={style.text_up}>
                        <div>- I'm Julie.</div>
                        <span>Frontend developer</span>
                    </h1>
                    <p> I'm 29 y.o., proactive, responsible and highly-motivated front-end developer with a strong analytical mind. I have experience working on a project in a team (development using Git, separation of responsibility, time estimation, use of Trello).
                        I'm improving my skills in React development and expanding them with new technologies. And also I have interest in learning Angular. In free time I solve Codewars tasks and improve my English (currently B1).
                        Now I'm not in a hurry and considering part-time or internship options.
                    </p>
                    <SuperButton title={"About my skills"} id={"/skills"} icon={faArrowRight}/>
                </div>
            </div>
        </Slide>
    </div>);
}
