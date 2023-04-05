import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";
import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
