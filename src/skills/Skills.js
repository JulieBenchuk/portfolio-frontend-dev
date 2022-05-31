import React from 'react';
import styleContainer from "./../container/container.module.css"
import style from "./Skills.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>My skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"La la la la la la la la la la la la la"}/>
                    <Skill title={"HTML"} description={"Yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo"}/>
                    <Skill title={"React"}
                           description={"Wow wow wow wow wow wow wow wow wow wow wow wow wow  wow wow wow"}/>
                </div>
            </div>
        </div>
    );
};
