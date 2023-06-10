import React from 'react';
import styleContainer from "../common/styles/container/container.module.scss"
import style from "./Skills.module.scss";
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faDocker} from "@fortawesome/free-brands-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faSass} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faNode} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {redux_icon} from "../assets/img/svg/redux";
import {ts_icon} from "../assets/img/svg/ts";
import {express_icon} from "../assets/img/svg/express";
import {flutter_icon} from "../assets/img/svg/flutter";
import {dart_icon} from "../assets/img/svg/dart";
import {test_icon} from "../assets/img/svg/test"
import {mui_icon} from "../assets/img/svg/mui"
import {heroku_icon} from "../assets/img/svg/heroku"
import {vercel_icon} from "../assets/img/svg/vercel"
import {next_icon} from "../assets/img/svg/next"
import {Slide} from "react-awesome-reveal";
import {Info} from "./info/Info";
import {Achievement} from "./achievement/Achievement";


export const Skills = () => {
    return (
        <div className={style.skillsBlock} id={"skills"}>
            <Slide direction={"right"}>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                    <Title title_1st={"About"} title_2nd={"me"} shadow_title={"resume"}/>

                    <div className={style.meInfo}>
                        <div className={style.personalInfo}>
                            <div className={style.personalInfoInner}>
                                <div className={style.personalInfoTitle}>
                                    <h3>Personal info</h3>
                                </div>
                                <div className={style.personalInfoColumns}>
                                    <div className={style.personalInfoColumn}>
                                        <ul>
                                            <Info title={"First name"} value={"Julie"}/>
                                            <Info title={"Last name"} value={"Benchuk"}/>
                                            <Info title={"Age"} value={"29 y.o"}/>
                                            <Info title={"Nationality"} value={"Belarusian"}/>
                                            <Info title={"Freelance"} value={"Available"}/>
                                            <Info title={"Ready for relocation"} value={"Yes"}/>
                                        </ul>
                                    </div>
                                    <div className={style.personalInfoColumn}>
                                        <ul>
                                            <Info title={"Address"} value={"Minsk, Belarus"}/>
                                            <Info title={"Phone"} value={"+375 44 559 06 60"}/>
                                            <Info title={"Email"} value={"juliebenchuk@gmail.com"}/>
                                            <Info title={"Education"}
                                                  value={"Gomel State University - Banking and Finance."}/>
                                            <Info value={"IT-INCUBATOR - Front-end development training."}/>
                                            <Info title={"Languages"} value={"Belarusian & Russian (native), English (B1)"}/>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.achievements}>
                            <div className={style.achievementsInner}>
                                <Achievement amount={"10"} subjectStart={"completed"} subjectEnd={"projects"}/>
                                <Achievement amount={"2K"} subjectStart={"hours of"} subjectEnd={"coding"}/>
                                <Achievement amount={"1.5"} subjectStart={"year of"} subjectEnd={"experience"}/>
                                <Achievement amount={"300"} subjectStart={"codewars"} subjectEnd={"honor"}/>
                            </div>
                        </div>
                    </div>

                    <hr className={style.separator}/>

                    <div className={style.skillsInfo}>
                        <div className={style.skillsInfoTitle}>
                            <h3>My skills</h3>
                        </div>
                        <div className={style.skills}>
                            <Skill title={"JS"} icon={faJs}
                                   description={"ES6. Solid knowledge of JavaScript. JavaScript ecosystem tools (webpack, npm, yarn)."}/>
                            <Skill title={"React"} icon={faReact}
                                   description={"Strong React knowledge, both on hook and class-based."}/>
                            <Skill title={"Redux"} icon_svg={redux_icon}
                                   description={"Experience in Redux and Redux Thunk."}/>
                            <Skill title={"TypeScript"} icon_svg={ts_icon}
                                   description={"Strong Typescript knowledge."}/>
                            <Skill title={"Next.js"} icon_svg={next_icon}
                                   description={"Experience in creating applications on Next.js."}/>
                            <Skill title={"Dart"} icon_svg={dart_icon}
                                   description={"Knowledge of Dart programming language."}/>
                            <Skill title={"Flutter"} icon_svg={flutter_icon}
                                   description={"Working experience in mobile application development."}/>
                            <Skill title={"REST API"} icon={faGlobe}
                                   description={"Experience in working with RESTful services. Axios."}/>
                            <Skill title={"Node.js"} icon={faNode}
                                   description={"Basic Node.js knowledge."}/>
                            <Skill title={"HTML"} icon={faHtml5}
                                   description={"HTML5, DOM, Semantic HTML."}/>
                            <Skill title={"CSS"} icon={faCss3Alt}
                                   description={"CSS3. Responsive design. CSS-modules."}/>
                            <Skill title={"Sass/SCSS"} icon={faSass}
                                   description={"Experience in CSS preprocessor like SASS, SCSS."}/>
                            <Skill title={"UI"} icon_svg={mui_icon}
                                   description={"Knowledge of UI libraries (Material-UI, Storybook)."}/>
                            <Skill title={"Git"} icon={faGithub}
                                   description={"Familiarity with code versioning tool such as Git."}/>
                            <Skill title={"Heroku"} icon_svg={heroku_icon}
                                   description={"Experience in servless (Heroku)."}/>
                            <Skill title={"Vercel"} icon_svg={vercel_icon}
                                   description={"Experience in servless (Vercel)."}/>
                            <Skill title={"Express"} icon_svg={express_icon}
                                   description={"Express."}/>
                            <Skill title={"Testing"} icon_svg={test_icon}
                                   description={"Experience with unit testing, API testing (Postman)."}/>
                            <Skill title={"Docker"} icon={faDocker}
                                   description={"Theoretical knowledge of Docker."}/>
                        </div>
                    </div>
                </div>

            </Slide>
        </div>
    );
};
