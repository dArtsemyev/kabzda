import React from "react";
import s from "./OnOf.module.css"

type OnOfPropsType = {
    isOn: boolean
    changeCollapsed: (isOff: boolean) => void
}

function OnOf(props: OnOfPropsType) {

    const borderButton = {
        border: "1px solid black",
    }

    return (
        <div className={s.onOf}>
            <div onClick={() => {props.changeCollapsed(false)}} className={s.button + " " + s.buttonOn} style={borderButton}>On</div>
            <div onClick={() => {props.changeCollapsed(true)}} className={s.button + " " + s.buttonOff} style={borderButton}>Off</div>
            <div className={props.isOn ? s.indicator : s.active}></div>
        </div>
    );
}

export default OnOf;