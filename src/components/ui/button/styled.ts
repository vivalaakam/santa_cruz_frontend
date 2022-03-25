import { css } from '@linaria/core';

export const container = css`
  background-color: var(--button-bg-color);
  border: initial;
  color: var(--button-text-color);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 24px;

  border-radius: 8px;

  font-size: 16px;
  line-height: 120%;

  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    box-shadow: 0px 8px 20px rgba(122, 137, 254, 0.25);
    background-color: var(--button-hover-color);
    cursor: pointer;
  }
`;
