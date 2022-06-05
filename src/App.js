import './App.module.css';
import React from "react";
import {Header} from "./header/Header";
import style from "./App.module.css"
import {Description} from "./description/description";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";

function App() {
    return (
        <div>
            {/*<div className={style.color_block}></div>*/}
            <div className={style.app}>
                <Description/>
                <Header/>
            </div>
            <div className={style.app}>
                <Skills/>
            </div>
            <div className={style.app}>
                <Projects/>
            </div>

        </div>
    );
}

export default App;
