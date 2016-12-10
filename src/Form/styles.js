const common = {
  width       : '100%',
  padding     : '5px 5px 5px 10px',
  outline     : 'none',
  borderRadius: 4
};

const styles = {
  textField: {
    ...common
  },
  selectContainer: {
    position     : 'relative',
    paddingBottom: 10
  },
  selectBox: {
    cursor    : 'pointer',
    textAlign : 'left',
    userSelect: 'none'
  },
  selectBoxArrow: {
    top          : 0,
    cursor       : 'pointer',
    right        : 5,
    width        : 20,
    height       : 20,
    bottom       : 0,
    margin       : 'auto',
    fontSize     : '.9rem',
    position     : 'absolute',
    pointerEvents: 'none'
  },
  selectList: {
    width    : '100%',
    zIndex   : 1200,
    padding  : 20,
    position : 'absolute',
    textAlign: 'left',
    overflowY: 'auto'
  },
  select: {
    cursor    : 'pointer',
    userSelect: 'none'
  }
};

export default styles;
