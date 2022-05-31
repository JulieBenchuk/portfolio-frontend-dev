import './App.module.css';
import React from "react";
import {Header} from "./header/Header";
import style from "./App.module.css"
import {Description} from "./description/description";

function App() {
    return (
        <div className={style.app}>
         {/*   <div className={style.color_block}></div>*/}
            <Description/>
            <Header/>
        </div>
    );
}

export default App;
