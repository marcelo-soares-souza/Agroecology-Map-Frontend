import { NavLink } from "react-router-dom";

// assets
import logo from "@assets/logo-agroecologymap.svg";

// components
import Translator from "./i18n/Translator";
import Button from "./UI/Button";

// styles
import classes from "./MainHeader.module.css";

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

        <NavLink to="/register">
          <Button color="1" fill="outline">
            <Translator path="header.enter" />
          </Button>
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
