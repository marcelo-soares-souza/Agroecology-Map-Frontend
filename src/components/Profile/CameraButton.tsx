import { FiCamera } from "react-icons/fi";

export const CameraButton = () => (
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
    <div
      style={{
        backgroundColor: "#4D4D4D",
        padding: "0.4rem",
        margin: 0,
        lineHeight: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%"
      }}
    >
      <FiCamera color="#dddddd" size={24} />
    </div>
  </div>
);
