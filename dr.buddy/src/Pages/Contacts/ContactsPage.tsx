
import "./Contacts.css"
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Cards from "./Cards";
import gio from "./imgProfili/gio.jpg";

function ContactsPage() {
  return (
    <div className="Contacts">
      <Navbar />
      <div className="Container">
       
   <Cards text1={<h2>Cipriano Mereu</h2>} text2={<p>FullStack Developer</p>} image="{gio}" />
   <Cards text1={<h2>Giovanni Composto</h2>} text2={<p>FullStack Developer</p>}image={gio} />
   <Cards text1={<h2>Marco Bonnì</h2>} text2={<p>FullStack Developer</p>}image="{gio}" />
   <Cards text1={<h2>Alessio Boscaro</h2>} text2={<p>FullStack Developer</p>} image="{gio}" />
   <Cards text1={<h2>Roberta Federico</h2>} text2={<p>FullStack Developer</p>} image="{gio}" />
   <Cards text1={<h2>Edoardo Gentile</h2>} text2={<p>FullStack Developer</p>} image="{gio}" />
   </div>
     
      <Footer/>
       
    </div>
  );
}

export default ContactsPage