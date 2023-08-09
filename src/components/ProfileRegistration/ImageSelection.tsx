import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// Components
import Translator from "../i18n/Translator";
import CameraButton from "./CameraButton";
import PrevNextButtons from "./PrevNextButtons";
// Styles
import { firstColumn } from "../../pages/ProfileRegistration.module.css";
import classes from "./ImageSelection.module.css";

interface IImageSelection {
  avatar: string;
  banner: string;
  changePage: Function;
  onAvatarChange: Function;
  onBannerChange: Function;
}

const ImageSelection = (props: IImageSelection) => {
  const { t } = useTranslation();

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

  const keyboardSelectOnFocusHandler = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "Enter" || event.key === " ")
      event.currentTarget.getElementsByTagName("input")[0].click();
  };

  return (
    <div className={firstColumn}>
      <div className="h-group">
        <h1>
          <Translator path="profileRegistration.imageSelection.title" />
        </h1>
        <p className="text-light break-words">
          <Translator path="profileRegistration.imageSelection.subtitle" />
        </p>
      </div>
      <div className="w-full mb-3">
        <div
          className={classes.banner}
          tabIndex={0}
          onKeyUp={keyboardSelectOnFocusHandler}
        >
          <img
            src={bannerImageFile}
            alt={t("userAccountProfile.bannerImgAlt")}
          />
          <CameraButton addPhoto={addBannerPhotoHandler} />
        </div>
        <div
          className={classes.avatar}
          tabIndex={0}
          onKeyUp={keyboardSelectOnFocusHandler}
        >
          <img
            src={avatarImageFile}
            alt={t("userAccountProfile.avatarImgAlt")}
          />
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
