import { FiCamera } from "react-icons/fi";

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
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.6
      }}
    >
      <label htmlFor="file-input">
        <div>
          <FiCamera color="#dddddd" size={24} />
          <input
            id="file"
            type="file"
            name="file"
            accept="image/x-png, image/jpeg"
            onChange={addPhotoChangedHandler}
            style={{}}
          />
        </div>
      </label>
    </div>
  );
};

export default CameraButton;
