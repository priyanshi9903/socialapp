import "../styles/navbar.css";

function Navbar() {
  return (

<div className="navbar">

    <div className="logo-section">

        <div className="logo">
            SocialSphere
        </div>

        <div className="tagline">
            Connect • Share • Explore
        </div>

    </div>

    <div className="right-section">

        <div className="coin-box">
            💎 195
        </div>

        <div className="avatar">
            👤
        </div>

    </div>

    <button className="nav-button">Profile</button>

</div>

);
}

export default Navbar;