import logo from "/images/logo2.png";
import "../../styles/Navbar.css";
import React, { useState, useEffect } from "react";
import About from "../about";
import Facilities from "../facilities";
import Admission from "../admission";
import Levels from "../levels";

function Navbar(): JSX.Element {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the event listener when the component is mounted
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={
          isSticky
            ? "navbar navbar-expand-lg navbar-dark bg-color sticky"
            : "navbar navbar-expand-lg navbar-dark bg-color"
        }
      >
        <div className="container-fluid">
          <div className="logo-area">
            <a href="https://index.tsx" target="_blank">
              <img
                src={logo}
                width={"60px"}
                height={"60px"}
                className="logo"
                alt="Edumate logo"
              />
              <p className="logo-text">
                EDU<span>MATE</span>
              </p>
            </a>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a className="nav-link" href="#">
                  ABOUT
                </a>
                {isDropdownVisible && <About />}
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a className="nav-link" href="#">
                  LEVELS
                </a>
                {isDropdownVisible && <Levels />}
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a className="nav-link" href="#">
                  FACILITIES
                </a>
                {isDropdownVisible && <Facilities />}
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a className="nav-link" href="#">
                  ADMISSION
                </a>
                {isDropdownVisible && <Admission />}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button className="btn btn-outline-success" type="submit">
          Login/Register
        </button>
      </nav>
    </>
  );
}

export default Navbar;
