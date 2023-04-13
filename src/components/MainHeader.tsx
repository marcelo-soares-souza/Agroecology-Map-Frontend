import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

import logo from "/logo.svg";
import Translator from "./i18n/Translator";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logoWrap} to="/">
        <img
          height={100}
          src={logo}
          className={classes.logo}
          alt="Agroecology Map Logo"
        />
        <span className={classes.logotype}>
          <Translator path="header.agroecologyMap" />
        </span>
      </Link>
      <nav className={classes.nav}>
        <Link to="/profile">
          <Translator path="header.profile" />
        </Link>

        <Link to="/register" className={classes.button}>
          <button className="btn-highlight-1">
            <Translator path="header.enter" />
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
