import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, title, className, onClose, modalPosition }) => {
  const Backdrop = () => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);
    return (
      <div
        className="fixed top-0 z-40 h-full w-full bg-black/75 "
        onClick={onClose}
      ></div>
    );
  };
  const ModalOverlay = () => {
    return (
      <div
        className={`absolute ${className} left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-xl bg-slate-100 p-10 m:max-w-[40%] ${
          modalPosition || "top-[40%]"
        } `}
      >
        <p className="text-center text-xl font-bold text-black">{title}</p>
        {children}
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root"),
      )}
    </React.Fragment>
  );
};
export default Modal;
