import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuBtnState, setMenuBtnState] = useState(false);

  const handleMenuBtn = () => {
    setMenuBtnState(true);
  };

  return (
    <>
      <div
        className={
          menuBtnState ? "mobile-nav active-mobile__nav" : "mobile-nav"
        }
        onClick={() => setMenuBtnState(false)}
      >
        <div className="brand-name__cover">
          <div className="brand-image"></div>
          <div className="brand-name__text">Farm</div>
        </div>
        <div className="mobile-link__items">
          <Link to="/" className="mobile-link">
            <p>Home</p>
          </Link>
          <Link to="/about" className="mobile-link">
            <p>About</p>
          </Link>
          <Link to="/news-room" className="mobile-link">
            <p>News-room</p>
          </Link>
          <Link to="#" className="mobile-link">
            <p>kernel</p>
          </Link>
        </div>
      </div>
      <div
        className={menuBtnState ? "backdrop active-backdrop" : "backdrop "}
        onClick={() => setMenuBtnState(false)}
      ></div>
      <nav>
        <div className="mobile-nav__tab">
          <div>
            <div className="nav-brand__cover">
              <div className="nav-brand__image"></div>
              <div className="nav-brand__name">Farms</div>
            </div>
          </div>
          <div className="nav-icon__menu" onClick={handleMenuBtn}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
        <div className="nav-items">
          <Link to="#" className="nav-links">
            Home
          </Link>
          <Link to="#" className="nav-links">
            About
          </Link>
          <div className="nav-brand__cover">
            <div className="nav-brand__image"></div>
            <div className="nav-brand__name">Farms</div>
          </div>
          <Link to="#" className="nav-links">
            Poultry
          </Link>
          <Link to="#" className="nav-links">
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
