import "./Contacts.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Cards from "./Cards";
import gio from "./imgProfili/gio.jpg";
import alessio from "./imgProfili/alessio.jpg";
import cipriano from "./imgProfili/cipriano.jpg";
import marco from "./imgProfili/marco.jpg";
import edo from "./imgProfili/edo.jpg";
import roberta from "./imgProfili/roberta.jpg";
function ContactsPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="Contacts">
        <div className="Container">
          <Cards
            text1="Cipriano Mereu"
            text2="ciprianomereu"
            image={cipriano}
            text3="gitabbonu"
            telnum="3474302869"
            email="ciprianomereu@gmail.com"
          />
          <Cards
            text1="Giovanni Composto"
            text2="giovannicomposto"
            image={gio}
            text3="giovyc93"
            telnum="3664562771"
            email="giovyc93@gmail.com"
          />
          <Cards
            text1="Marco Bonnì"
            text2="marcobonni"
            image={marco}
            text3="marcobonni"
            email="marco.bonni19@gmail.com"
            telnum="3288996072"
          />
          <Cards
            text1="Alessio Boscaro"
            text2="alessioboscaro"
            text3="alessiobo"
            image={alessio}
            telnum="3924059329"
            email="placeholder@gmail.com"
          />
          <Cards
            text1="Roberta Federico"
            text2="robertafederico"
            image={roberta}
            text3="Roberta93-web"
            email="federicoroberta1@gmail.com"
            telnum="3343264982"
          />
          <Cards
            text1="Edoardo Gentile"
            text2="edoardogentile"
            image={edo}
            text3="EdoGent"
            telnum="3899294805"
            email="edogen22122003@gmail.com"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactsPage;
