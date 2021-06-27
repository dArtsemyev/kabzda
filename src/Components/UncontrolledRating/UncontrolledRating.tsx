import React, {useState} from "react"
import s from "./UncontrolledRating.module.css"
import {RatingValueType} from "../../App";

type RatingPropsType = {
}

function UncontrolledRating(props: RatingPropsType) {
    console.log("UncontrolledRating rendered")

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setValue: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendered")

    return (
        <span className={s.star} onClick={() => props.setValue(props.value)}>
            {props.selected ? <b>star</b> : "star"}
        </span>
    );
}

export default UncontrolledRating;