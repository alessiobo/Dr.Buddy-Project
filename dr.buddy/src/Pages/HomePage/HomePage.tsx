import "./homePage.css";
import Title from "./HomeComponents/TitleHome";
import Video from "./HomeComponents/VideoHome";
import { Nav } from "./HomeComponents/NavHome";
function HomePage() {
  return (
    <div>
      <Video />
      <header>
        <Title title="Dr. Buddy"></Title>
        <Nav />
        <div className="Join">
          <button type="button">Join</button>
        </div>
      </header>
    </div>
  );
}
export default HomePage;
