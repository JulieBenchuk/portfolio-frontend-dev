import React from 'react';
import styleContainer from "./../container/container.module.css"
import style from "./Skills.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title_1st={"About"} title_2nd={"me"} shadow_title={"resume"}/>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"La la la la la la la la la la la la la"}/>
                    <Skill title={"HTML"}
                           description={"Yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo  aaaaaaa aaaaaaa aaaaaa aaaaaa yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo"}/>
                    <Skill title={"React"}
                           description={"Wow wow wow wow wow wow wow wow wow wow wow wow wow  wow wow wow"}/>
                    <Skill title={"TypeScript"}
                           description={"TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor."}/>
                    <Skill title={"CSS"}
                           description={"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]"}/>
                </div>
            </div>
        </div>
    );
};
