import React from "react";
import "./modal.component.css";

function Modal({ toggleModal, number }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}>
        <div className="modal-content">
          <button onClick={toggleModal} className="close-modal">
            close
          </button>
          <h2>The Random number is:</h2>
          <h1 className="random-num">{number}</h1>
        </div>
      </div>
    </div>
  );
}

export default Modal;
