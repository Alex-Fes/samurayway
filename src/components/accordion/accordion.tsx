
type AccordionPropsType = {
    collapsed: Boolean;
    title: string

}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    //debugger
    if (props.collapsed) {
    return <div>
        <AccordionTitle title = {props.title} collapsed/>
        <AccordionBody/>
    </div>
    } else {
        return <div>
            <AccordionTitle title = {props.title} collapsed/>
        </div>
    }
}

function AccordionTitle(props: AccordionPropsType) {
    console.log('AccordionTitle rendering')
    //debugger
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    //debugger
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;