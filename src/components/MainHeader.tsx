import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

import logo from "../assets/logo-agroecologymap.svg";
import Translator from "./i18n/Translator";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <NavLink className={classes.logoWrap} to="/">
        <img src={logo} className={classes.logo} alt="Agroecology Map Logo" />
        <span className={classes.logotype}>
          <Translator path="header.agroecologyMap" />
        </span>
      </NavLink>
      <nav className={classes.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.underline
          }
          to="/profile"
        >
          <Translator path="header.profile" />
        </NavLink>

        <NavLink to="/register" className={classes.button}>
          <button className="btn-highlight-1">
            <Translator path="header.enter" />
          </button>
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
