import { dark } from '../styles/colors';

const styles = {
  container: {
    top       : 0,
    width     : 200,
    height    : '100%',
    zIndex    : 2000,
    padding   : 10,
    position  : 'fixed',
    transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms' // fix
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
