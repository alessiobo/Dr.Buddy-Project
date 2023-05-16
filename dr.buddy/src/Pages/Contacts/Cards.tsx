import "./Cards.css"
function Card (props:any) {
    return (
        <div className="cardCo"> 
        <div className="imgCo">
        <img src={props.image} alt="Immagine Profilo" />

        </div>
        <div className="textCo">
            {props.text1} {props.text2}
        </div>
            </div>

            )
}

export default Card