import React from "react";
import { general_icons } from "../../constants/icons";

const Modal = ({ open, setopen, children, width }) => {
  const handleClose = () => {
    setopen(false);
  };

  return (
    <div
      id="modal-window"
      className={`hideModal shadow ${open ? "showModal" : ""}`}
    >
      <div className="main-modal" style={{ width }}>
        <span onClick={handleClose} className="modal_close_btn">
          <span className="icon_wrap">{general_icons.xicon}</span>
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
