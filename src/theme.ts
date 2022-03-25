import { css } from '@linaria/core';
import Color from 'color';

const mainColor = Color('#fbfbfe');
const blue = Color('#7a89fe');
const green = Color('#17B294');
const red = Color('#FB8477');
const secondColor = Color('#232859');

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

      --button-bg-color: ${blue.fade(0.25).toString()};
      --button-text-color: #ffffff;
      --button-hover-color: ${blue.toString()};

      --divider-bg-color: #e1e1fb;

      --input-border: ${secondColor.fade(0.5).toString()};
      --input-hover-border: ${secondColor.toString()};

      --green: ${green.toString()};
      --blue: ${blue.toString()};
      --red: ${red.toString()};
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
