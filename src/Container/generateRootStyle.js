// @flow

import { fontFamily } from '../styles/variables';
import { light, dark } from '../styles/colors';

const generateRootStyle = (containerId: string, key: string, sub: string): string => (
  `
   #${containerId} {
      font-family: ${fontFamily};
      borderColor: ${key};
      color: ${sub};
      font-size: 1.1rem;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
    }
    #${containerId} h1,
    #${containerId} h2,
    #${containerId} h3,
    #${containerId} h4,
    #${containerId} h5,
    #${containerId} h6 {
      margin: 0;
      color: ${key};
    }
    #${containerId} h1 {
      font-size: 4.2rem;
    }
    #${containerId} h2 {
      font-size: 3.5rem;
    }
    #${containerId} h3 {
      font-size: 2.9rem;
    }
    #${containerId} h4 {
      font-size: 2.2rem;
    }
    #${containerId} h5 {
      font-size: 1.6rem;
    }
    #${containerId} h6 {
      font-size: 1.0rem;
    }
    #${containerId} hr {
      border-color: ${sub};
    }
    #${containerId} a {
      color: ${key};
      margin: 0 .2rem;
      text-decoration: none;
    }
    #${containerId} a:hover {
      opacity: .8;
    }
    #${containerId} label {
      display: block;
      font-weight: 700;
    }
    #${containerId} pre:before {
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
    #${containerId} pre > code {
      font-size: 1.0rem;
      margin: 0;
      padding: 0;
    }
    #${containerId} code {
      position: relative;
      font-size: 1.1rem;
      padding: .1em;
      border-radius: .3em;
      margin: 0 .2rem;
      /* background: ${(sub === dark ? light : dark)}; */
    }
    #${containerId} .scuba-avatar-no-img {
      color: ${sub};
      border: 1px solid ${key};
    }
    #${containerId} .scuba-paper {
      color: ${sub};
      border: 1px solid ${key};
      background: ${(sub === dark ? light : dark)};
    }
    #${containerId} .scuba-button {
      color: ${key};
    }
    #${containerId} .scuba-button:hover {
      color: ${sub};
      background-color: ${key};
    }
    #${containerId} .scuba-button-disabled {
      cursor: not-allowed !important;
      color: ${sub};
      opacity: .6;
    }
    #${containerId} .scuba-button-clear {
      background-color: transparent;
    }
    #${containerId} .scuba-blockquote {
      border-color: ${key} !important;
    }
    #${containerId} .scuba-list {
      color: ${key};
    }
    #${containerId} .scuba-list-li > div {
      color: ${sub};
    }
    #${containerId} .scuba-textform {
      color: ${dark};
      border: 1px ${light} solid;
      background: ${light};
    }
    #${containerId} .scuba-textform:focus {
      border: 1px ${key} solid;
    }
    #${containerId} .scuba-tableheader,
    #${containerId} .scuba-tablerow {
      border-bottom: 1px ${key} solid;
    }
    #${containerId} .scuba-tablefooter {
      border-top: 1px ${key} solid;
    }

    @media (max-width: 40rem) {
      #${containerId} .scuba-grid-responsive > .scuba-cell:not(.scuba-cell-offset) {
        flex: 0 0 100% !important;
      }
    }
  `
);

export default generateRootStyle;
