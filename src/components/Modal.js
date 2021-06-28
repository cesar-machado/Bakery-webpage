import React from "react";
import "./Modal.css";

const Modal = ({id='modal', onClose, firstNane}) => {

    const handleOutSideClick = (e) => {
        if(e.target.id === id) onClose()
    };

  return (
    <div id={id} className="modal" onClick={handleOutSideClick}>
      <div className="container">
        <button className="close" onClick={onClose}><i className="fas fa-times"  /></button>
        <div className="content">
          <p>Your order was successfully received and we will contact you shortly.</p>
          <p>Thank you</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
