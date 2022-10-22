import './App.module.scss';
import React from "react";
import {Header} from "./header/Header";
import style from "./App.module.scss"
import {Switcher} from "./switcher/Switcher";
import {Routing} from "./common/components/routing/Routing";

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
