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
          <p data-testid="subtitle">
            {
              "Ut at quibusdam accusantium vel odio. Temporibus molestiae sed suscipit. In qui ex ut dicta qui ut ad. Voluptatem minima nisi quis at amet. Fugiat ullam qui maxime et. Quo laborum occaecati dolor quisquam."
            }
          </p>
          <div className={classes.ctaButtonsContainer}>
            <Link to={"/"}>
              <button className="btn-long">Discover Experiences</button>
            </Link>
            <Link to={"/register"}>
              <button className="btn-long btn-highlight-2">
                Be on the map
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
