import { css } from '@linaria/core';
import Color from 'color';

const mainColor = Color('#fbfbfe');
const primaryColor = Color('#7a89fe');
const secondaryColor = Color('#7a89fe');

export const globals = css`
  :global() {
    :root {
      --main-bg-color: ${mainColor.toString()};
      --main-text-color: #232859;
      --second-bg-color: #ffffff;
      --action-bg-color: #7a89fe;
      --action-text-color: #ffffff;
      --action-hover-color: #7a89fe9a;
      --action-active-color: #7a89fecc;

      --button-bg-color: ${primaryColor.fade(0.25).toString()};
      --button-text-color: #ffffff;
      --button-hover-color: ${primaryColor.toString()};

      --divider-bg-color: #f2f2f2;
    }

    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      background-color: var(--main-bg-color);
      color: var(--main-text-color);
    }

    html,
    root {
      height: 100%;
    }

    #root {
      min-height: 100%;
    }
  }

  display: flex;
  flex-direction: column;
`;
