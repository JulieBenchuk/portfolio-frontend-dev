import React, {useState} from 'react';
import style from "./Switcher.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {faDroplet} from "@fortawesome/free-solid-svg-icons";


export const Switcher = (props) => {
    const [switcherOn, setSwitcherOn] = useState(false)
    const onSwitchClickHandler = () => {
        setSwitcherOn(!switcherOn)
    }
    const onClickColorHandler = (color)=>{
        props.changeTheme(color)
    }
    return (
        <div className={style.switcherBlock} onClick={onSwitchClickHandler}>
            {!switcherOn && <FontAwesomeIcon icon={faGear} className={style.spin} />}
            {switcherOn && <div className={style.switcher} onMouseLeave={onSwitchClickHandler}>
                <div className={style.contentSwitcher}>
                    <h4>STYLE SWITCHER <span onClick={onSwitchClickHandler}>X</span></h4>
                    <ul>
                        <li><a className={style.color}><FontAwesomeIcon id={"#1b8a82"} icon={faDroplet} className={style.colorGreenishBlue} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                        <li><a className={style.color} ><FontAwesomeIcon id={"#fa5b0f"} icon={faDroplet} className={style.colorOrange} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                        <li><a className={style.color} ><FontAwesomeIcon id={"#5f865f"} icon={faDroplet} className={style.colorGreen} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                        <li><a className={style.color} ><FontAwesomeIcon id={"#e867b0"} icon={faDroplet} className={style.colorRose} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                        <li><a className={style.color} ><FontAwesomeIcon id={"#e54b4b"} icon={faDroplet} className={style.colorRed} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                        <li><a className={style.color} ><FontAwesomeIcon id={"#5483d9"} icon={faDroplet} className={style.colorBlue} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                        <li><a className={style.color} ><FontAwesomeIcon id={"#d7d12f"} icon={faDroplet} className={style.colorYellow} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                        <li><a className={style.color} ><FontAwesomeIcon id={"#254f9c"} icon={faDroplet} className={style.colorDarkBlue} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                        <li><a className={style.color} ><FontAwesomeIcon id={"#86d72f"} icon={faDroplet} className={style.colorSalad} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                        <li><a className={style.color} ><FontAwesomeIcon id={"#7810d3"} icon={faDroplet} className={style.colorPurple} onClick={(e)=>onClickColorHandler(e.currentTarget.id)}/></a></li>
                    </ul>
                </div>

            </div>}
        </div>
    );
};
