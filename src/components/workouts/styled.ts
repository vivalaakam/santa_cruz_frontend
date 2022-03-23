import { css } from '@linaria/core';

export const container = css`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const leftSide = css`
  background-color: var(--second-bg-color);
  padding: 22px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 16px;
  line-height: 24px;
`;

export const content = css`
  flex: 1 0 0;
  padding: 10px 20px;
  background-color: var(--second-bg-color);
  box-shadow: 0px 10px 30px rgba(122, 137, 254, 0.04);
  border-radius: 10px;
`;
