import { useState } from "react";
import { Link } from "react-scroll";
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
            <div className="logo">
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
                      <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <span className="text nav-text">About</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <span className="text nav-text">Education</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="internships"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <span className="text nav-text">Internships</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <span className="text nav-text">Projects</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <span className="text nav-text">Contact</span>
                      </Link>
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
