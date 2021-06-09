import React from "react";
import s from "./OnOf.module.css"

type OnOfPropsType = {
    isOn: boolean
    changeCollapse: (onOf: boolean) => void
}

function OnOf(props: OnOfPropsType){
    return (
        <div className={s.onOf}>
            <div onClick={() => {props.changeCollapse(false)}} className={s.button + " " + s.buttonOn}>On</div>
            <div onClick={() => {props.changeCollapse(true)}} className={s.button + " " + s.buttonOff}>Off</div>
            <div className={props.isOn ? s.indicator : s.active}></div>
        </div>
    );
}

export default OnOf;