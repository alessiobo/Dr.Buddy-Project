import "./homePage.css";
import Title from "./HomeComponents/TitleHome";
import Video from "./HomeComponents/VideoHome";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
function HomePage() {
  return (
    <div className="homepage">
        
      <div className="homeContainer">
      <Navbar />
        <div className="video_wrapper"><Video /></div>
        <Footer></Footer>
        
      </div>
      
       
    </div>
  );
}
export default HomePage;
