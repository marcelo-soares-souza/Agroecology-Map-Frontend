import { PrevNextButtons } from "./PrevNextButtons";

import classes from "../../pages/Profile.module.css";
import CameraButton from "./CameraButton";
import { useEffect, useState } from "react";

interface IImageSelection {
  avatar: string;
  banner: string;
  changePage: Function;
  onAvatarChange: Function;
  onBannerChange: Function;
}

const ImageSelection = (props: IImageSelection) => {
  const [avatarImageFile, setAvatarImageFile] = useState("");
  const [bannerImageFile, setBannerImageFile] = useState("");

  useEffect(() => {
    setAvatarImageFile(props.avatar);
    setBannerImageFile(props.banner);
  }, [props.avatar, props.banner]);

  const previousPageHandler = () => {
    props.changePage("Location");
  };

  const nextPageHandler = () => {
    props.changePage("ProfessionalInformation");
  };

  const addAvatarPhotoHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.files;
    if (value && value[0]) {
      const image = URL.createObjectURL(value[0]);
      setAvatarImageFile(image);
      props.onAvatarChange(image);
    }
  };

  const addBannerPhotoHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.files;
    if (value && value[0]) {
      const image = URL.createObjectURL(value[0]);
      setBannerImageFile(image);
      props.onBannerChange(image);
    }
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
          <img src={bannerImageFile} alt="Profile Avatar" />
          <CameraButton addPhoto={addBannerPhotoHandler} />
        </div>
        <div>
          <div
            className={classes.avatar}
            style={{
              position: "relative",
              cursor: "pointer"
            }}
          >
            <img src={avatarImageFile} alt="Profile Avatar" />
            <CameraButton addPhoto={addAvatarPhotoHandler} />
          </div>
        </div>
      </div>
      <div>
        <PrevNextButtons
          previousPageHandler={previousPageHandler}
          nextPageHandler={nextPageHandler}
        />
      </div>
    </div>
  );
};

export default ImageSelection;
