import "./homePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import hero_image from "./imgs/dottore_homepage.svg"
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homeContainer">
        <div className="first_section_wrapper">
        <div className="first_section">
          <div className="text_wrap">
            <h2>Prenota facilmente con dr.Buddy</h2>
            <h3>Nel nostro studio medico lavoriamo al meglio per fornire ai nostri pazienti un'assistenza eccezionale e una grande comodità.</h3>
            <Link to="/login"><button>Prenota ora</button></Link>
          </div>
          <img src={hero_image}/> 
        </div>
        </div>
        <div className="second_section">
          <img src={hero_image}/> 
          <div className="text_wrap">
          <h2>Prenotare non è mai stato così facile!</h2>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, amet! Ratione quod nisi officia nemo, reprehenderit voluptatem magni veritatis quae amet doloribus quam, harum hic, inventore saepe quas facilis? Eaque!</h3>
          </div>
        </div>
        <div className="third_section">

        </div>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
