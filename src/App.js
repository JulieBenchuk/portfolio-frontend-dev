import './App.module.css';
import React from "react";
import {Header} from "./header/Header";
import style from "./App.module.css"
import {Description} from "./description/Description";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Switcher} from "./switcher/Switcher";

function App() {
    return (
        <div className={style.app}>
            <Switcher/>
            <Header/>
            <Description/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
