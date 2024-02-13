import React from 'react';
import '../CSS/Modal.css';

export const Modal = ({ showModal, closeModal, children }) => {
    return showModal ? (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      ) : null;
}
