import { css } from '@linaria/core';

export const container = css`
  background-color: var(--button-bg-color);
  border-radius: 12px;
  border: initial;
  color: var(--button-text-color);
  padding: 12px 16px;
  font-size: inherit;
  line-height: inherit;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    box-shadow: 0px 8px 20px rgba(122, 137, 254, 0.25);
    background-color: var(--button-hover-color);
    cursor: pointer;
  }
`;
