import React from "react";
import OnOf from "../OnOf/OnOf";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <OnOf isOn={props.collapsed} />
                { !props.collapsed && <AccordionBody/>}
            </div>
        );

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>--{props.title}--</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;