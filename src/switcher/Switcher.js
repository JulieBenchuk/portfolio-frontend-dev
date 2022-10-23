import React, {useState} from 'react';
import style from "./Switcher.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {faDroplet} from "@fortawesome/free-solid-svg-icons";


export const Switcher = () => {
    const [switcherOn, setSwitcherOn] = useState(false)
    const onSwitchClickHandler = () => {
        console.log("change color!")
        setSwitcherOn(!switcherOn)
    }
    return (
        <div className={style.switcherBlock}>
            {!switcherOn && <FontAwesomeIcon icon={faGear} className={style.spin} onClick={onSwitchClickHandler}/>}
            {switcherOn && <div className={style.switcher}>
                <div className={style.contentSwitcher}>
                    <h4>STYLE SWITCHER <span onClick={onSwitchClickHandler}>X</span></h4>
                    <ul>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                        <li><a className={style.color} href=""><FontAwesomeIcon icon={faDroplet} className={style.colorIcon}/></a></li>
                    </ul>
                </div>

            </div>}
        </div>
    );
};
