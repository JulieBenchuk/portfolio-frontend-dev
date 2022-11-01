import React from 'react';
import styleContainer from "../common/styles/container/container.module.scss"
import style from "./Projects.module.scss"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import social from "./../assets/img/social_network_img.png"
import todo from "./../assets/img/todolist_img.jpeg"
import cards from "./../assets/img/cards_img.jpeg"
import {Slide} from "react-awesome-reveal";


export const Projects = () => {
    const socialStyle = {
        backgroundImage: `url(${social})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const todoStyle = {
        backgroundImage: `url(${todo})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const cardsStyle = {
        backgroundImage: `url(${cards})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (
        <div className={style.projectsBlock} id={"projects"}>
            <Slide direction={"left"}>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title title_1st={"My"} title_2nd={"portfolio"} shadow_title={"projects"}/>
                    <div className={style.projects}>
                        <Project name={'Social network'} style={socialStyle}
                                 url={'https://juliebenchuk.github.io/social-network/'} shortDescription={`Use a dedicated online platform to maintain contact, interact and collaborate with like-minded individuals and peers.`}/>
                        <Project name={'To-do list'} style={todoStyle}
                                 url={'https://juliebenchuk.github.io/todolist/'}
                                 shortDescription={`It’s a list of tasks you need to complete or things that you want to do.  Traditionally, they’re written on a piece of paper or post it notes and act as a memory aid. As technology has evolved we have been able to create a todo list apps. You can use a to do list in your home and personal life, or in the workplace.`}/>
                        <Project name={'Flashcards'} style={cardsStyle} url={'https://densalab.github.io/work_in_friday/'}
                                 shortDescription={`Flashcards are a great tool when you want to memorize a new topic or learn a new language. You write a question and the answer on the card. Then you can test your memory by going through the flashcards.  You can build your own flashcards app.`}/>
                    </div>
                </div>
            </Slide>
        </div>
    );
};
