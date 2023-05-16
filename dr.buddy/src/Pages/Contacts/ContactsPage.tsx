
import "./Contacts.css"
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Cards from "./Cards";
import gio from "./imgProfili/gio.jpg";
import cip from "./imgProfili/Cip.jpg";
import edo from "./imgProfili/Edo.jpg";

function ContactsPage() {
  return (<>
    <Navbar />
    <div className="Contacts">
      
      <div className="Container">
       
   <Cards text1={<h2>Cipriano Mereu</h2>} text2={<p>FullStack Developer</p>} image={cip} />
   <Cards text1={<h2>Giovanni Composto</h2>} text2={<p>FullStack Developer</p>}image={gio} />
   <Cards text1={<h2>Marco Bonnì</h2>} text2={<p>FullStack Developer</p>}image="{gio}" />
   <Cards text1={<h2>Alessio Boscaro</h2>} text2={<p>FullStack Developer</p>} image="{gio}" />
   <Cards text1={<h2>Roberta Federico</h2>} text2={<p>FullStack Developer</p>} image="{gio}" />
   <Cards text1={<h2>Edoardo Gentile</h2>} text2={<p>FullStack Developer</p>} image={edo} />
   </div>
     
      
       
    </div>
    <Footer/></>
  );
}

export default ContactsPage