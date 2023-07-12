import { PrevNextButtons } from "./PrevNextButtons";

import classes from "../../pages/Profile.module.css";
import { CameraButton } from "./CameraButton";

interface IImageSelection {
  avatar: string;
  banner: string;
  changePage: Function;
  onAvatarChange?: Function;
  onBannerChange?: Function;
}

const ImageSelection = (props: IImageSelection) => {
  const previousPageHandler = () => {
    props.changePage("Location");
  };

  const nextPageHandler = () => {
    props.changePage("ProfessionalInformation");
  };

  return (
    <div className={classes.firstColumn}>
      <div>
        <h1>{"Personalize your profile"}</h1>
        <p className="text-light break-words">
          {
            "Do it your way! Choose a profile photo and cover - \nthat's how the world will see you ;)"
          }
        </p>
      </div>
      <div className="w-full mb-3">
        <div
          className={classes.banner}
          style={{
            width: "100%",
            borderRadius: "12px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer"
          }}
        >
          <img src={props.banner} alt="Profile Banner" />
          <CameraButton />
        </div>
        <div>
          <div
            className={classes.avatar}
            style={{
              position: "relative",
              cursor: "pointer"
            }}
          >
            <img src={props.avatar} alt="Profile Avatar" />
            <CameraButton />
          </div>
        </div>
      </div>
      <div>
        <PrevNextButtons
          previousPageHandler={previousPageHandler}
          nextPageHandler={nextPageHandler}
        />
        {/* <small
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 0,
            alignItems: "center",
            width: "100%"
          }}
        >
          <a href="#">
            <p>Skip for now</p>
          </a>
        </small> */}
      </div>
    </div>
  );
};

export default ImageSelection;
