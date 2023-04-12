import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

import logo from "/logo.svg";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="Agroecology Map Logo" />
      </Link>
      <p>
        <Link to="/profile" className={classes.link}>
          Profile
        </Link>

        <Link to="/register" className={classes.button}>
          Sign-Up
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
