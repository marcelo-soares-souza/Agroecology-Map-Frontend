import { Link } from "react-router-dom";
import Translator from "../components/i18n/Translator";

import classes from "./Home.module.css";

import iphone from "../assets/iphonemockup.svg";
import plantBL from "../assets/plant1.svg";
import plantTL from "../assets/plant2.svg";
import plantBR from "../assets/plant3.svg";
import plantTR from "../assets/plant4.svg";
import { Button } from "../components/UI/Button";

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
              <button style={{ color: "#4D4D4D" }}>
                <Translator path="home.discoverCTA" />
              </button>
            </Link>
            <Link to={"/register"}>
              <Button color="2" fill="normal">
                <Translator path="home.registerCTA" />
              </Button>
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
