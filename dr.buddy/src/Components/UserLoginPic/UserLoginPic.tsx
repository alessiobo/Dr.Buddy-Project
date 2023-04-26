import "./userLoginPic.css";

//@ts-ignore
import defaultPic from "./circle-user.svg";

function UserLoginPic({ name = "" }) {
  return (
    <div className="ulp-container">
      <img src={defaultPic} alt="pic" />
      <span className="ulp-online"></span>
<<<<<<< HEAD
      <h3>Dr.{name}</h3>
=======
      <h3 style={{ lineHeight: "inherit" }}>Dr.{name}</h3>
>>>>>>> develope
    </div>
  );
}

export default UserLoginPic;
