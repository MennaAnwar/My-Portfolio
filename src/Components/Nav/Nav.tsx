import { useState } from "react";
import logo from "../../img/M.png";
import "./Nav.css";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled((toggled) => !toggled);
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="site-branding">
              <img src={logo} alt="Logo New" />
            </div>
          </div>
          <div className="col-lg-9">
            <div
              className={`main-navigation d-m-none ${toggled ? "toggled" : ""}`}
            >
              <button className="hamburger for-mob" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="header-menu">
                <div className="menu-main-menu-container">
                  <ul className="d-flex">
                    <li>
                      <a href="/dashboard">
                        <span className="text nav-text">About</span>
                      </a>
                    </li>
                    <li>
                      <a href="/playlists">
                        <span className="text nav-text">Education</span>
                      </a>
                    </li>
                    <li>
                      <a href="/genres">
                        <span className="text nav-text">Internships</span>
                      </a>
                    </li>
                    <li>
                      <a href="/music">
                        <span className="text nav-text">Projects</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="text nav-text">Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
