import React from 'react';
import styleContainer from "./../container/container.module.css"
import style from "./Skills.module.css"
import {Skill} from "./skill/Skill";
import homeStyle from "./../App.module.css"

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h1>My <span className={homeStyle.home_color}>skills</span></h1>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"La la la la la la la la la la la la la"}/>
                    <Skill title={"HTML"} description={"Yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo  aaaaaaa aaaaaaa aaaaaa aaaaaa yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo"}/>
                    <Skill title={"React"}
                           description={"Wow wow wow wow wow wow wow wow wow wow wow wow wow  wow wow wow"}/>
                </div>
            </div>
        </div>
    );
};
