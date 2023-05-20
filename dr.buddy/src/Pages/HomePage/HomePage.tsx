import "./homePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import hero_image from "./imgs/dottore_homepage.svg";
import clock_image from "./imgs/icons8-orologio.svg";
import doctor_image from "./imgs/icons8-medico-50.png";
import microscopio_img from "./imgs/icons8-microscopio-50.png";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="homepage">
      {/* <Navbar /> */}
      <div className="homeContainer">
        <div className="first_section_wrapper">
          <div className="first_section">
            <div className="text_wrap">
              <h2>Prenota facilmente con dr.Buddy</h2>
              <h3>
                Nel nostro studio medico lavoriamo al meglio per fornire ai
                nostri pazienti un'assistenza eccezionale e una grande comodità.
              </h3>
              <Link to="/login">
                <button>Prenota ora</button>
              </Link>
            </div>
            <img src={hero_image} />
          </div>
        </div>
        <div className="big-card">
          <h2 className="bcH2">
            Prenota la tua consulenza
            <br />
            medica con facilità!{" "}
          </h2>
          <div className="small-cards">
            <div className="small-card">
              <div className="card-header">
                <img src={clock_image} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Basta perdite di tempo</h3>
                <p className="card-description">
                  Descrizione della card piccola.
                </p>
              </div>
            </div>
            <div className="small-card">
              <div className="card-header">
                <img src={doctor_image} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Personale altamente qualificato</h3>
                <p className="card-description">
                  Descrizione della card piccola.
                </p>
              </div>
            </div>
            <div className="small-card">
              <div className="card-header">
                <img src={microscopio_img} />
              </div>
              <div className="card-content">
                <h3 className="card-title">Attrezzature moderne</h3>
                <p className="card-description">
                  Descrizione della card piccola.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="third_section"></div>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
