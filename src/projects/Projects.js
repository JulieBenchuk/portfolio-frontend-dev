import React from 'react';
import styleContainer from "./../container/container.module.css"
import style from "./Projects.module.css"
import {Project} from "./project/Project";
import {Title} from "../common/title/Title";
import social from "./../assets/img/social_network_img.png"
import todo from "./../assets/img/todolist_img.jpeg"
import cards from "./../assets/img/cards_img.jpeg"


export const Projects = () => {
    const socialStyle ={
        backgroundImage: `url(${social})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const todoStyle ={
        backgroundImage: `url(${todo})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const cardsStyle ={
        backgroundImage: `url(${cards})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (<div className={style.projectsBlock}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <Title title_1st={"My"} title_2nd={"portfolio"} shadow_title={"projects"}/>
            <div className={style.projects}>
                <Project name={'Social network'} style={socialStyle} shortDescription={`Short description
                    hhhhhhhhhh  hhhhhhhhhh  hhhhhhhhhh`}/>
                <Project name={'To do list'} style={todoStyle}
                         shortDescription={`Todoist makes it easy to go as simple or as complex as you want`}/>
                <Project name={'Cards'} style={cardsStyle}
                         shortDescription={`At Quizlet, we believe that anyone can learn anything. All it takes is a tenacious spirit, the right guidance and the tools to see it through.
We know that students are under more pressure than ever. It can leave them feeling overwhelmed, produce anxiety and make it all too easy to burn out.
It’s our job to give every student the tools and confidence to succeed, no matter their motivation or what they’re striving to achieve.`}/>
            </div>
        </div>
    </div>);
};
