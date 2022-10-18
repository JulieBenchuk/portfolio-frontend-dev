import './App.module.css';
import React from "react";
import {Header} from "./header/Header";
import style from "./App.module.css"
import {Switcher} from "./switcher/Switcher";
import {Routing} from "./common/routing/Routing";

function App() {
    return (
        <div className={style.app}>
            <Switcher/>
            <Header/>
            <Routing/>
        </div>
    );
}

export default App;
