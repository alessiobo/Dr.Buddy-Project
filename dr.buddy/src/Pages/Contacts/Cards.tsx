import "./Cards.css"
// import "./imgProfili/imgProfili.json"
import github_icon from "./imgProfili/github_white.jpg"
import linkedin_icon from "./imgProfili/linkedin_white.jpg"
import email_icon from "./imgProfili/email_icon.jpg"
import tel_icon from "./imgProfili/phone_icon.jpg"
import person_white from "./imgProfili/person_white.jpg"

function Card(props: any) {
    return (
        <div className="cardCo">
            <div className="imgCo">
                <img src={props.image} alt="Immagine Profilo" />
            </div>
            <div className="textCo">
            <div className="icon_text_wrapper">
                    <img className="linkedin_icon" src={person_white} /><h2>{props.text1}</h2>
                    </div>
                {/* da valutare per scelta stilistica */}
                <div className="icon_text_wrapper">
                    <img className="linkedin_icon" src={linkedin_icon} /><h3>{props.text2}</h3>
                    </div>
                <div className="icon_text_wrapper"><img className="github_icon" src={github_icon} /><h3>{props.text3}</h3></div>
                <div className="icon_text_wrapper"><img src={email_icon} /><h3>{props.email}</h3></div>
                <div className="icon_text_wrapper"><img src={tel_icon} /><h3>{props.telnum}</h3></div>
            </div>


        </div>
    )
}

export default Card