// @flow

import { fontFamily } from '../styles/variables';
import { light, dark } from '../styles/colors';

const generateRootStyle = (containerClassName: string, key: string, sub: string): string => (
  `
   .${containerClassName} {
      font-family: ${fontFamily};
      borderColor: ${key};
      color: ${sub};
      font-size: 1.1rem;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
    }
    .${containerClassName} h1,
    .${containerClassName} h2,
    .${containerClassName} h3,
    .${containerClassName} h4,
    .${containerClassName} h5,
    .${containerClassName} h6 {
      margin: 0;
      color: ${key};
    }
    .${containerClassName} h1 {
      font-size: 4.2rem;
    }
    .${containerClassName} h2 {
      font-size: 3.5rem;
    }
    .${containerClassName} h3 {
      font-size: 2.9rem;
    }
    .${containerClassName} h4 {
      font-size: 2.2rem;
    }
    .${containerClassName} h5 {
      font-size: 1.6rem;
    }
    .${containerClassName} h6 {
      font-size: 1.0rem;
    }
    .${containerClassName} hr {
      border-color: ${sub};
    }
    .${containerClassName} a {
      color: ${key};
      margin: 0 .2rem;
      text-decoration: none;
    }
    .${containerClassName} a:hover {
      opacity: .8;
    }
    .${containerClassName} label {
      display: block;
      font-weight: 700;
    }
    .${containerClassName} pre:before {
      background: ${light};
      border: solid 1px ${light};
      border-top: none;
      border-left: none;
      color: #555;
      font-size: .9rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    }
    .${containerClassName} pre > code {
      font-size: 1.0rem;
      margin: 0;
      padding: 0;
    }
    .${containerClassName} code {
      position: relative;
      font-size: 1.1rem;
      padding: .1em;
      border-radius: .3em;
      margin: 0 .2rem;
      /* background: ${(sub === dark ? light : dark)}; */
    }
    .${containerClassName} .scuba-avatar-no-img {
      color: ${sub};
      border: 1px solid ${key};
    }
    .${containerClassName} .scuba-paper {
      color: ${sub};
      border: 1px solid ${key};
      background: ${(sub === dark ? light : dark)};
    }
    .${containerClassName} .scuba-button {
      color: ${key};
    }
    .${containerClassName} .scuba-button:hover {
      color: ${sub};
      background-color: ${key};
    }
    .${containerClassName} .scuba-button-disabled {
      cursor: not-allowed !important;
      color: ${sub};
      opacity: .6;
    }
    .${containerClassName} .scuba-button-clear {
      background-color: transparent;
    }
    .${containerClassName} .scuba-blockquote {
      border-color: ${key} !important;
    }
    .${containerClassName} .scuba-list {
      color: ${key};
    }
    .${containerClassName} .scuba-list-li > div {
      color: ${sub};
    }
    .${containerClassName} .scuba-textform {
      color: ${dark};
      border: 1px ${light} solid;
      background: ${light};
    }
    .${containerClassName} .scuba-textform:focus {
      border: 1px ${key} solid;
    }
    .${containerClassName} .scuba-selectcontainer {
      border-bottom: 1px ${key} solid;
    }
    .${containerClassName} .scuba-selectbox:hover {
      opacity: .7;
    }
    .${containerClassName} .scuba-selectlist {
      background: ${(sub === dark ? light : dark)};
      box-shadow: 0 0 5px 0 ${sub};
    }
    .${containerClassName} .scuba-selectitem:hover {
      color: ${key};
    }
    .${containerClassName} .scuba-tableheader,
    .${containerClassName} .scuba-tablerow {
      border-bottom: 1px ${key} solid;
    }
    .${containerClassName} .scuba-tablefooter {
      border-top: 1px ${key} solid;
    }

    .${containerClassName} .scuba-drawer {
      background: ${(sub === dark ? light : dark)};
    }

    @media (max-width: 40em) {
      .${containerClassName} .scuba-grid-responsive > .scuba-cell:not(.scuba-cell-offset) {
        flex: 0 0 100% !important;
      }
    }
  `
);

export default generateRootStyle;
