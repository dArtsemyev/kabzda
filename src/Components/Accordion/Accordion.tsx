import React, {useState} from "react";
import OnOf from "../OnOf/OnOf";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

    let [collapsed, setCollapsed] = useState(props.collapsed)

    const changeCollapsed = (isOff: boolean) => {
        setCollapsed(isOff)
    }

        return (
            <div>
                <OnOf isOn={collapsed} changeCollapsed={changeCollapsed}/>
                <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
                { !collapsed && <AccordionBody/>}
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