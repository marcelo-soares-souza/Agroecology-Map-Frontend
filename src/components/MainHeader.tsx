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
        <Link to="/" className={classes.button}>
          Home
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
