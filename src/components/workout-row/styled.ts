import { css } from '@linaria/core';

export const container = css`
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    background-color: var(--action-hover-color);
    color: var(--action-text-color);
    box-shadow: 0px 8px 20px rgba(122, 137, 254, 0.25);
  }
`;

export const active = css`
  background-color: var(--action-active-color);
  color: var(--action-text-color);
  box-shadow: 0px 8px 20px rgba(122, 137, 254, 0.25);
`;
