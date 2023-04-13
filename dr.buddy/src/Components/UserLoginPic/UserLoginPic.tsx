import defaultPic from "./circle-user-solid.svg";

import "./userLoginPic.css";

function UserLoginPic() {
  return (
    <div className="ulp-container">
      <img src={defaultPic} alt="pic" />
      <span className="ulp-online"></span>
      <h3>Dr. Paperino</h3>
    </div>
  );
}

export default UserLoginPic;
