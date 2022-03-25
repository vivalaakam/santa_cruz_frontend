import React, { useCallback, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import { ModalProps } from './types';
import { ReactPortal } from '../react-portal';
import { container, content, closeModal } from './styled';
import close from './close.svg';

export const Modal: React.FC<ModalProps> = ({ className, children, isOpen, handleClose }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  const onClickContent = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={300}
        unmountOnExit
        classNames={container}
        nodeRef={nodeRef}
      >
        <div className={container} onClick={handleClose} role="dialog" aria-modal="true">
          <div className={content} onClick={onClickContent}>
            <div className={className}>{children}</div>
            <button className={closeModal} onClick={handleClose}>
              <img src={close} alt="close modal" />
            </button>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};
