import { FiCamera } from "react-icons/fi";

import classes from "./CameraButton.module.css";

interface ICameraButton {
  addPhoto: Function;
}

const CameraButton = (props: ICameraButton) => {
  const rand = Math.floor(Math.random() * 1000);

  const addPhotoChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.addPhoto(event);
  };

  return (
    <label htmlFor={`file-input-${rand}`} style={{ cursor: "pointer" }}>
      <div className={classes.inputImage}>
        <div className={classes.cameraIcon}>
          <FiCamera color="#EEE" size={32} />
        </div>
        <input
          id={`file-input-${rand}`}
          type="file"
          name="file"
          accept="image/x-png, image/jpeg"
          onChange={addPhotoChangedHandler}
        />
      </div>
    </label>
  );
};

export default CameraButton;
