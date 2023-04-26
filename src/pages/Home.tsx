import { Link } from "react-router-dom";
import Translator from "../components/i18n/Translator";

import classes from "./Home.module.css";

import iphone from "../assets/iphonemockup.svg";
import plantBL from "../assets/plant1.svg";
import plantTL from "../assets/plant2.svg";
import plantBR from "../assets/plant3.svg";
import plantTR from "../assets/plant4.svg";

const Home = () => {
  return (
    <div className={classes.container + " grid-container"}>
      <div className="two-columns" style={{ justifyContent: "center" }}>
        <div className={classes.firstColumn}>
          <h1 className={classes.superTitle}>
            <Translator path="home.titleLine1" />
            <br />
            <span className={classes.title}>
              <Translator path="home.titleLine2" />
            </span>
          </h1>
          <p data-testid="subtitle" className={"light-text"}>
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
        <div className={classes.illustrationContainer + " contain-center"}>
          <div className={classes.illustration}>
            <img src={plantBL} className={classes.plantBL} alt="Illustration" />
            <img src={plantTL} className={classes.plantTL} alt="Illustration" />
            <img src={plantBR} className={classes.plantBR} alt="Illustration" />
            <img src={iphone} className={classes.iphone} alt="Illustration" />
            <img src={plantTR} className={classes.plantTR} alt="Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
