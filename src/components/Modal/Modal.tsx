import { ReactNode } from 'react';
import s from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <button className={s.buttonClose} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
