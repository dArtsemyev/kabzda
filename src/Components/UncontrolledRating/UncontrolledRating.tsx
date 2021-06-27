import React, {useState} from "react"
import s from "./UncontrolledRating.module.css"

type RatingPropsType = {
}

function UncontrolledRating(props: RatingPropsType) {
    console.log("UncontrolledRating rendered")

    let [value, setValue] = useState(0)

    return (
        <div>
            <div className={s.star} onClick={() => {setValue(1)}}><Star selected={value > 0}/></div>
            <div className={s.star} onClick={() => {setValue(2)}}><Star selected={value > 1}/></div>
            <div className={s.star} onClick={() => {setValue(3)}}><Star selected={value > 2}/></div>
            <div className={s.star} onClick={() => {setValue(4)}}><Star selected={value > 3}/></div>
            <div className={s.star} onClick={() => {setValue(5)}}><Star selected={value > 4}/></div>

        </div>
    );
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendered")

    if(props.selected){
        return (
            <span><b>star</b> </span>
        );
    } else {
        return (
            <span>star </span>
        );
    }

}

export default UncontrolledRating;