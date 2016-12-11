import { dark } from '../styles/colors';

/**
 * animation
 * fyi: http://www.knockknock.jp/archives/184
 */

const styles = {
  container: {
    top       : 0,
    width     : 200,
    height    : '100%',
    zIndex    : 2000,
    padding   : 10,
    position  : 'fixed',
    transition: 'transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms' // quadraticEaseOut
  },
  overlay: {
    top       : 0,
    left      : 0,
    width     : '100vw',
    height    : '100vh',
    zIndex    : 1999,
    opacity   : '.6',
    position  : 'fixed',
    background: dark
  }
};

export default styles;
