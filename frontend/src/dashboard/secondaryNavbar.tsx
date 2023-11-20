import { Link } from "react-router-dom";
import "./navbar.css";

function SecondaryNavbar() {
  return (
    <>
      <nav className="sticky">
        <Link to={'/'}>
        <div>
          <img src="/images/logo2.png" className="logo" />
        </div>
        </Link>
      </nav>
    </>
  );
}

export default SecondaryNavbar;
