import "./userLoginPic.css";

//@ts-ignore
import defaultPic from "./circle-user.svg";

function UserLoginPic({
  name = "",
  personalImg,
}: {
  name: string;
  personalImg?: any;
}) {
  return (
    <div className="ulp-container">
      <img src={personalImg ? personalImg : defaultPic} alt="pic" />
      <span className="ulp-online"></span>
      <h3 style={{ lineHeight: "inherit" }}>{name}</h3>
    </div>
  );
}

export default UserLoginPic;
