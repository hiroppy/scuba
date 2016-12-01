import {fontFamily} from '../styles/variables';
import {light, dark} from '../styles/colors';

const generateRootStyle = (containerId, key, sub) => (
  `
   #${containerId} {
      font-family: ${fontFamily};
      borderColor: ${key};
      color: ${sub};
      font-size: 1.1rem;
      line-height: 1.5;
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
    #${containerId} .scuba-button {
      color: ${key}
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
    #${containerId} .scuba-blockquote {
      border-color: ${key} !important;
    }
    #${containerId} .blockquote > * {
      color: ${sub};
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
  `
);

export default generateRootStyle;
