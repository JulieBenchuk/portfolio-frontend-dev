import React from 'react';
import styleContainer from "../common/styles/container/container.module.scss"
import style from "./Projects.module.scss"
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import social from "./../assets/img/social_network_img.png"
import cards from "./../assets/img/cards_img.jpeg"
import onlineStore from "./../assets/img/onlineStore.png"
import webStudio from "./../assets/img/web_studio_img.png"
import {Slide} from "react-awesome-reveal";


export const Projects = () => {
    const socialStyle = {
        backgroundImage: `url(${social})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const cardsStyle = {
        backgroundImage: `url(${cards})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const webStudioStyle = {
        backgroundImage: `url(${webStudio})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const storeStyle = {
        backgroundImage: `url(${onlineStore})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (
        <div className={style.projectsBlock} id={"projects"}>
            <Slide direction={"left"}>
                <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title title_1st={"My"} title_2nd={"portfolio"} shadow_title={"projects"}/>
                    <div className={style.projects}>
                        <Project name={'Web-studio'} style={webStudioStyle}
                                 url={'https://web-studio-sigma.vercel.app/'} urlCode={"https://github.com/JulieBenchuk/web-studio"}
                                 shortDescription={`Web-studio platform with feedback forms.`}
                                 stack={"React, TypeScript, Next.js, Formik, Yup, React-Scroll, Swiper, React-Paginate."}/>
                        <Project name={'Online store'} style={storeStyle} url={'https://gspotfrontend-57cdjjfxo-zebartcoc.vercel.app/'} urlCode={"https://github.com/DJWOMS/GSpot"}
                                 shortDescription={`Online video game store like Steam.`}
                        stack={"React, React Hook Form, TypeScript, Next.js, HTML5, Tailwind CSS, CSS modules, Faker.js, Datepicker, Swiper, React-Paginate, etc."}/>
                        <Project name={'Flashcards'} style={cardsStyle} url={'https://densalab.github.io/work_in_friday/'} urlCode={"https://github.com/DenSalab/work_in_friday"}
                                 shortDescription={`Flashcards are a great tool when you want to memorize a new topic or learn a new language.`}
                        stack={"React (Functional Components), Redux, TypeScript, JS, Axios, Formik, React-Router-dom (V6), Thunk-Redux, Font Awesome icons."}/>
                        <Project name={'Social network'} style={socialStyle}
                                 url={'https://juliebenchuk.github.io/social-network/'} urlCode={"https://github.com/JulieBenchuk/social-network"} shortDescription={`Use this online platform to maintain contact, interact and collaborate with like-minded individuals.`}
                        stack={"React (Functional & Class-Components), Redux, TypeScript, JS, Axios, Redux Form, Thunk-Redux, ReactPlayer, React-Router-dom (V5), Font Awesome icons."}/>
                    </div>
                </div>
            </Slide>
        </div>
    );
};
