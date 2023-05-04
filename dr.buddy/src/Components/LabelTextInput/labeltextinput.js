function labeltextinput(props) {
    return (
        <div>
        <h2>{props.label}</h2>
        <input type="text" placeholder={props.label} onChange={(event) => {props.hooksetter(event.target.value)}}/> 
        </div>
    )
}

export default labeltextinput