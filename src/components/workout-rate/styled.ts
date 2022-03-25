import { css } from '@linaria/core';

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

export const title = css`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  margin: 0px;
  padding: 0px;
`;

export const rates = css`
  display: flex;
  justify-content: space-between;
`;

export const rate = css`
  background-color: transparent;
  border: none;
  margin: 0px;
  padding: 0px;

  text-align: center;
  font-size: 20px;
  line-height: 24px;

  &:hover {
    cursor: pointer;
    color: var(--green);
    opacity: 0.75;
    transform: scale(1.2);
  }

  &.active {
    color: var(--green);
    transform: scale(1.1);
  }

  & > span:before {
    margin: 0px;
  }
`;

export const commentField = css``;
