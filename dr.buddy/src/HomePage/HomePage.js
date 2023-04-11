import "./homePage.css"


function Page() {
    return (
      <div>
        <video poster="./video/Doctors.mp4" playsInline autoPlay muted loop>
            <source src="./video/Doctors.mp4" type="video/mp4"></source>
        </video>
        <header>
<h1>Dr buddy</h1>
<nav >
    <a href="">Home</a>
    <a href="">Menu</a>
    <a href="">Option</a>
    <a href="">Home</a>
    
    </nav>
    <div className="fashion">
<h2>Join</h2>
    </div>



        </header>
      </div>
    );
  }
  export default Page