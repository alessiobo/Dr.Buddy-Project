import "./homePage.css";
import Title from "./HomeComponents/TitleHome";
import Video from "./HomeComponents/VideoHome";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
function HomePage() {
  return (
    <div className="homepage">
      <header className="homeContainer">
        <Video />
        <Navbar />
        
      </header>
      <div className="Join">
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
