import "./userLoginPic.css";

function UserLoginPic({username}: UserLoginPicProps) {
return (
<div className="ulp-container">
<img alt="pic" />
<span className="ulp-online"></span>
<h3>{username}</h3>
</div>
);
}

export default UserLoginPic;