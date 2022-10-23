import React from 'react';
import styleContainer from "../common/styles/container/container.module.scss"
import style from "./Skills.module.scss"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faSass} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {redux_icon} from "../assets/img/svg/redux"
import {ts_icon} from "../assets/img/svg/ts"
import {test_icon} from "../assets/img/svg/test"
import Slide from 'react-reveal/Slide';


export const Skills = () => {
    return (
        <div className={style.skillsBlock} id={"skills"}>
            <Slide bottom>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title_1st={"About"} title_2nd={"me"} shadow_title={"resume"}/>
                    <div className={style.skills}>
                        <Skill title={"JS"} icon={faJs}
                               description={"ES6. Solid knowledge of JavaScript. JavaScript ecosystem tools (webpack, npm, yarn)."}/>
                        <Skill title={"React"} icon={faReact}
                               description={"Strong React knowledge, both on hook and class-based."}/>
                        <Skill title={"Redux"} icon_svg={redux_icon}
                               description={"Experience in Redux and Redux Thunk."}/>
                        <Skill title={"TypeScript"} icon_svg={ts_icon}
                               description={"Basic Typescript knowledge."}/>
                        <Skill title={"HTML"} icon={faHtml5}
                               description={"HTML5, DOM, Semantic HTML."}/>
                        <Skill title={"CSS"} icon={faCss3Alt}
                               description={"Responsive design. CSS-modules."}/>
                        <Skill title={"Sass/SCSS"} icon={faSass}
                               description={"Experience in CSS preprocessor like SASS, SCSS."}/>
                        <Skill title={"Git"} icon={faGithub}
                               description={"Familiarity with code versioning tool such as Git."}/>
                        <Skill title={"Testing"} icon_svg={test_icon}
                               description={"Experience with unit testing, API testing (Postman)."}/>
                        <Skill title={"REST API"} icon={faGlobe}
                               description={"Experience in working with RESTful services."}/>
                    </div>
                </div>
            </Slide>
        </div>
    );
};
