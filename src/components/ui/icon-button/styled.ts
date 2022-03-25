import { css } from '@linaria/core';

export const container = css`
  background-color: transparent;
  border: 0;
  margin: 0px;
  padding: 0px;
  width: 24px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;
