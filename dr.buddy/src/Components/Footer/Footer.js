import "./Footer.css"
import logo_white from "./img/logo_white.png"
import facebook_img from "./img/facebook.svg"
import instagram_img from "./img/instagram.svg"
import twitter_img from "./img/twitter.svg"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <div className="Footer">
            <div className="logo_wrapper">
            <Link to="/">
                <img src={logo_white}/>
                </Link>
            </div>
            <div>
                <p>© 2023 Team 1 All Rights Reserved.</p>
            </div>
            <div className="social_wrapper">
                <div>
                    <img src={facebook_img}></img>
                </div>
                <div>
                    <img src={instagram_img}></img>
                </div>
                <div>
                    <img src={twitter_img}></img>
                </div>
            </div>
        </div>
    )
}

export default Footer