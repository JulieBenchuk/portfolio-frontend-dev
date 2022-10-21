import React from 'react';
import styleContainer from "../common/styles/container/container.module.css"
import style from "./Skills.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faSass} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {redux_icon} from "./../assets/img/svg/redux"
import {ts_icon} from "./../assets/img/svg/ts"
import {test_icon} from "./../assets/img/svg/test"
import Slide from 'react-reveal/Slide';


export const Skills = () => {
    return (
        <div className={style.skillsBlock} id={"skills"}>
            <Slide bottom>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title_1st={"About"} title_2nd={"me"} shadow_title={"resume"}/>
                    <div className={style.skills}>
                        <Skill title={"JS"} icon={faJs}
                               description={"JavaScript is a programming language that allows developers to create interactive elements on websites. It’s important for junior developers to have JavaScript skills because it can help them build the foundation of web pages and applications. JavaScript also enables developers to use frameworks like AngularJS, which is an increasingly popular tool in software development.a"}/>
                        <Skill title={"HTML"} icon={faHtml5}
                               description={"Yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo  aaaaaaa aaaaaaa aaaaaa aaaaaa yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yoYo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo"}/>
                        <Skill title={"React"} icon={faReact}
                               description={"Wow wow wow wow wow wow wow wow wow wow wow wow wow  wow wow wow"}/>
                        <Skill title={"Redux"} icon_svg={redux_icon}
                               description={"redux redux redux"}/>
                        <Skill title={"TypeScript"} icon_svg={ts_icon}
                               description={"TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor."}/>
                        <Skill title={"CSS"} icon={faCss3Alt}
                               description={"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]"}/>
                        <Skill title={"Sass/SCSS"} icon={faSass}
                               description={"Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."}/>
                        <Skill title={"Git"} icon={faGithub}
                               description={"Junior developers need to know how to use source control software, which is a system that records and stores all of the changes made to a website or application. This allows developers to revert back to previous versions if they make unwanted changes or mistakes. It also allows them to share their work with others so that multiple people can collaborate on projects."}/>
                        <Skill title={"Unit-testing"} icon_svg={test_icon}
                               description={"Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."}/>
                        <Skill title={"REST API"} icon={faGlobe}
                               description={"A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources."}/>
                    </div>
                </div>
            </Slide>
        </div>
    );
};
