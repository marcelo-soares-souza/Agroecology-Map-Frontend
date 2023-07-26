import { FiCamera } from "react-icons/fi";

import { inputImage } from "./CameraButton.module.css";

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
      <div className={inputImage}>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(100,100,100, 0.2)",
            borderRadius: "50%",
            backdropFilter: "blur(3px)",
            boxShadow: "0 0 8px 0 rgba(50,50,50,0.5)"
          }}
        >
          <FiCamera color="#EEE" size={32} />
        </div>
        <input
          id={`file-input-${rand}`}
          type="file"
          name="file"
          accept="image/x-png, image/jpeg"
          onChange={addPhotoChangedHandler}
          style={{
            all: "unset",
            opacity: 0,
            position: "absolute",
            zIndex: "-1",
            top: "-1000rem"
          }}
        />
      </div>
    </label>
  );
};

export default CameraButton;
