import './App.module.scss';
import React, {useState} from "react";
import {Header} from "./header/Header";
import style from "./App.module.scss"
import {Switcher} from "./switcher/Switcher";
import {Routing} from "./common/components/routing/Routing";

function App() {
    const root = document.documentElement;
    let colorLocalStorage = JSON.parse(window.localStorage.getItem('color'))
    const [themeColor, setThemeColor] = useState(colorLocalStorage ? colorLocalStorage : null)

    root.style.setProperty('--color', themeColor);

    const changeTheme = (color) => {
        setThemeColor(color)
        window.localStorage.setItem('color', JSON.stringify(color));
    }

    return (
        <div className={style.app}>
            <Switcher changeTheme={changeTheme}/>
            <Header/>
            <Routing/>
        </div>
    );
}

export default App;
