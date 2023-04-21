import { Link } from "react-router-dom";
import Translator from "../components/i18n/Translator";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className="grid-container">
      <div className="two-columns">
        <div>
          <h1 className={classes.superTitle}>
            <Translator path="home.titleLine1" />
            <br />
            <span className={classes.title}>
              <Translator path="home.titleLine2" />
            </span>
          </h1>
          <p data-testid="subtitle" className="light-text">
            <Translator path="home.subtitle" />
          </p>
          <div className={classes.ctaButtonsContainer}>
            <Link to={"/"}>
              <button className="btn-long">
                <Translator path="home.discoverCTA" />
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="btn-long btn-highlight-2">
                <Translator path="home.registerCTA" />
              </button>
            </Link>
          </div>
        </div>
        <div className="contain-center">[ Illustration ]</div>
      </div>
    </div>
  );
};

export default Home;
