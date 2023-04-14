import "./homePage.css";
import Title from "./Components/Title";
import Video from "./Components/Video";

function HomePage() {
  return (
    <div>
      <Video />
      <header>
        <Title title="Dr. Buddy"></Title>
        <nav>
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">Option</a>
          <a href="">Home</a>
        </nav>
        <div className="Join">
          <button type="button">Join</button>
        </div>
      </header>
    </div>
  );
}
export default HomePage;
