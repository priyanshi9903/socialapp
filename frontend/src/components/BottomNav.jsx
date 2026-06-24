import "../styles/bottomnav.css";

function BottomNav() {
  return (

<div className="bottom-nav">

    <div className="nav-item active-nav">
        <div className="nav-icon">🏠</div>
        Home
    </div>

    <div className="nav-item">
        <div className="nav-icon">🔍</div>
        Search
    </div>

    <div className="nav-item">
        <div className="nav-icon">➕</div>
        Add
    </div>

    <div className="nav-item">
        <div className="nav-icon">🔔</div>
        Alerts
    </div>

    <div className="nav-item">
        <div className="nav-icon">👤</div>
        Profile
    </div>

</div>

);
}

export default BottomNav;