import { useEffect, useState } from "react";

import CameraButton from "./CameraButton";
import PrevNextButtons from "./PrevNextButtons";

import { firstColumn } from "../../pages/Profile.module.css";
import classes from "./ImageSelection.module.css";

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
    <div className={firstColumn}>
      <div className="h-group">
        <h1>{"Personalize your profile"}</h1>
        <p className="text-light break-words">
          {
            "Do it your way! Choose a profile photo and cover - \nthat's how the world will see you ;)"
          }
        </p>
      </div>
      <div className="w-full mb-3">
        <div className={classes.banner}>
          <img src={bannerImageFile} alt="Profile Avatar" />
          <CameraButton addPhoto={addBannerPhotoHandler} />
        </div>
        <div className={classes.avatar}>
          <img src={avatarImageFile} alt="Profile Avatar" />
          <CameraButton addPhoto={addAvatarPhotoHandler} />
        </div>
      </div>
      <PrevNextButtons
        previousPageHandler={previousPageHandler}
        nextPageHandler={nextPageHandler}
      />
    </div>
  );
};

export default ImageSelection;
