import { FiCamera } from "react-icons/fi";
// Styles
import classes from "./CameraButton.module.css";

interface ICameraButton {
  addPhoto: Function;
}

const CameraButton = (props: ICameraButton) => {
  const addPhotoChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.addPhoto(event);
  };

  return (
    <div className={classes.inputImage}>
      <div className={classes.cameraIcon}>
        <FiCamera color="#EEE" size={32} />
      </div>
      <input
        tabIndex={-1}
        type="file"
        name="file"
        accept="image/x-png, image/jpeg"
        onChange={addPhotoChangedHandler}
      />
    </div>
  );
};

export default CameraButton;
