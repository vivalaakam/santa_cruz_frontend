import { css } from '@linaria/core';

export const container = css`
  padding: 12px 10px;
  outline: none;
  resize: none;
  border: 1px solid var(--input-border);
  border-radius: 6px;

  &:hover {
    border-color: var(--input-hover-border);
  }
`;
