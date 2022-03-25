import { css } from '@linaria/core';

export const container = css`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;

  &.enter {
    opacity: 0;
  }

  &.enter-done {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
  }
  &.modal-exit {
    opacity: 0;
    transform: scale(0.4);
  }
`;

export const content = css`
  z-index: 1000;
  background-color: var(--second-bg-color);
  padding: 20px;
  border-radius: 10px;
  position: relative;
`;

export const closeModal = css`
  background-color: transparent;
  border: 0;
  margin: 0px;
  padding: 0px;
  position: absolute;
  right: 0;
  top: 0;
  width: 18px;
  height: 18px;

  &:hover {
    cursor: pointer;
  }

  & img {
    width: 18px;
    height: 18px;
  }
`;
