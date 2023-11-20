import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import SearchButton from "../searchButton";
import { FaBars } from "react-icons/fa";
import { ScrollToSection } from "../scroll";
import SmallButton from "../smallButton";

function Navbar(): JSX.Element {
  return (
    <>
      <nav className={"sticky"}>
        <div className="sticky-left">
          <div className="logo-area">
            <Link to={"/"}>
              <a href="/" target="_blank">
                <img
                  src="/images/logo2.png"
                  width={"60px"}
                  height={"60px"}
                  className="logo"
                  alt="Edumate logo"
                />
                <p className="logo-text">
                  EDU<span>MATE</span>
                </p>
              </a>
            </Link>
          </div>
          <SearchButton />
        </div>
        <div className="sticky-right">
          <ul className="main_nav">
            <li className="nav_menu dropdown">
              <a className="nav-link active" aria-current="page" href="#">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  HOME
                </Link>
              </a>
            </li>
            <li
              className="nav_menu dropdown"
              onClick={() => ScrollToSection("about")}
            >
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li
              className="nav_menu dropdown"
              onClick={() => ScrollToSection("facilities")}
            >
              <a className="nav-link" href="#">
                FACILITIES
              </a>
            </li>
            <li className="nav_menu" onClick={() => ScrollToSection("contact")}>
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
          <div className="nav_menu">
            <FaBars className="icon" />
          </div>
        </div>
        <div>
        <Link to={"/login"}>{SmallButton("Login")}</Link>
        <Link to={"/register"}>{SmallButton("Register")}</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
