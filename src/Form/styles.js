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
    userSelect: 'none'
  },
  selectBoxArrow: {
    right        : 20,
    bottom       : 10, // for padding-bottom from selectContainer
    fontSize     : '.9rem',
    cursor       : 'pointer',
    position     : 'absolute',
    pointerEvents: 'none'
  },
  selectList: {
    width    : 'calc(100% - 40px)', // 20 * 2
    zIndex   : 1200,
    padding  : 20,
    position : 'absolute',
    overflowY: 'auto'
  },
  select: {
    cursor    : 'pointer',
    userSelect: 'none'
  }
};

export default styles;
