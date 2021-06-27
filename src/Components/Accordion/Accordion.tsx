import React from "react";
import OnOf from "../OnOf/OnOf";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeCollapsed: (isOff: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

        return (
            <div>
                <OnOf isOn={props.collapsed} changeCollapsed={props.changeCollapsed}/>
                <AccordionTitle title={props.titleValue} onClick={() => props.changeCollapsed(!props.collapsed)}/>
                { !props.collapsed && <AccordionBody/>}
            </div>
        );

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick()}>--{props.title}--</h3>
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