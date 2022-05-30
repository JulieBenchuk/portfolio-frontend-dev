import React from "react";
import style from "./description.module.css"


export const Description = () => {
    return (<div className={style.description}>
            <span className={style.photo}>
                <img className={style.avatar} src="https://c.neh.tw/thumb/f/720/comvecteezy227852.jpg"/>
            </span>
        <span className={style.text}>
                <h1>
                    <span>-</span> <span>I'M JULIE.</span>
                   <p>FRONT-END DEVELOPER</p>
                </h1>
                <p>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model
Thorough understanding of React.js and its core principles
Prior experience with popular React.js workflows (such as Flux or Redux)
Familiarity with more current specifications of EcmaScript
Prior experience with data structure libraries (e.g., Immutable.js)
Knowledge of isomorphic React is a plus
Familiarity with RESTful APIs
Familiarity with HTML / CSS
GIT experience is a plus
Knowledge of modern authorization mechanisms, such as JSON Web Token
Familiarity with modern front-end build pipelines and tools
Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
Ability to understand business requirements and translate them into technical requirements
A knack for benchmarking and optimization
Familiarity with code versioning tools (such as Git, SVN, and Mercurial)
                 </p>
           <div className={style.button}>
               <a href="https://www.instagram.com/julie_benchuk/">More about me <img className={style.button_icon} src="https://cdn2.iconfinder.com/data/icons/arrows-vol-1-1/32/right2-512.png"/></a>
           </div>
            </span>
    </div>);
}
