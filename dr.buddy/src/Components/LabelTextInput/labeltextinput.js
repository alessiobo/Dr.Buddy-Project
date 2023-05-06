
function LabelTextInput(props) {
    return (
        <div>
        <h2>{props.label}</h2>
        <input type={props.type} placeholder={props.label}/> 
        </div>
    )
}

export default LabelTextInput