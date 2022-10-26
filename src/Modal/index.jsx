import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={style.ModalBackground}>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal };