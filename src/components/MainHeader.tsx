import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

import logo from "/logo.svg";
import Translator from "./i18n/Translator";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logoWrap} to="/">
        <img src={logo} className={classes.logo} alt="Agroecology Map Logo" />
        <span className={classes.logotype}>
          <Translator path="header.agroecologyMap" />
        </span>
      </Link>
      <nav className={classes.nav}>
        <Link to="/profile" className={classes.link}>
          Profile
        </Link>

        <Link to="/register" className={classes.button}>
          Sign-Up
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
