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
                    <p> I'm 29 y.o. Proactive and skillful in handling issues, wiith a strong analytical mind. I have
                        experience working on a project in a team. Now I'm curious to learn Node.js. </p>
                    <SuperButton title={"About my skills"} id={"/skills"} icon={faArrowRight}/>
                </div>
            </div>
        </Slide>
    </div>);
}
