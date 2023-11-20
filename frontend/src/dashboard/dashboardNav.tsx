import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ScrollToSection } from "../components/scroll";
import SearchButton from "../components/searchButton";

function DashboardNav() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any = localStorage.getItem("user");
  user = JSON.parse(user);
  console.log(user);
  return (
    <>
      <nav className={"sticky"}>
        <div className="sticky-left">
          <div className="logo-area">
            <Link to={"#"}>
              <a href="#" target="_blank">
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
          <div className="userInfo">
            <p>
              Hello <span>{user.firstName}</span>
            </p>
          </div>
          <div className="nav_menu">
            <FaBars className="icon" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default DashboardNav;
