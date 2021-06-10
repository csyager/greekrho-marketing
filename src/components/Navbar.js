import icon from "./../images/android-chrome-192x192.png";
import { NavLink } from 'react-router-dom'

function Navbar(props) {
    var homeClass = "nav-item";
    var registerClass = "nav-item";
    var documentationClass = "nav-item";
    if (props.active === 'Home') homeClass += " active";
    else if (props.active === 'Documentation') documentationClass += " active";
    else if (props.active === 'Register') registerClass += "active";

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src={icon} width="30" height="30" className="d-inline-block align-top" alt="" />&nbsp;
                GreekRho
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className={homeClass}>
                    <NavLink exact className="nav-link" to="/">Home</NavLink>
                </li>
                <li className={documentationClass}>
                    <NavLink exact className="nav-link" to="/documentation">Documentation</NavLink>
                </li>
                <li className={registerClass}>
                    <NavLink exact className="nav-link" to="/greekrho+">GreekRho+</NavLink>
                </li>
                </ul>
                <ul className="nav navbar-nav ml-auto">
                    <li>
                        <a className="nav-link" href="https://greek-rho.com">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;