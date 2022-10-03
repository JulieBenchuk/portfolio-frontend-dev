import React from 'react';
import styleContainer from "./../container/container.module.css"
import style from "./Projects.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/title/Title";


export const Projects = () => {
    return (<div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <Title title_1st={"My"} title_2nd={"portfolio"} shadow_title={"projects"}/>
            <div className={style.projects}>
                <Project name={'Name of project 1'} shortDescription={`Short description
                    hhhhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhhh
                        hhhhhhhhhh`}/>
                <Project name={'Name of project 2'}
                         shortDescription={`Short description aaaa aaaaaaaa aaa  aaaa aaaaaaaaaaaaaaa`}/>
            </div>
        </div>
    </div>);
};
