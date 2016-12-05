const styles = {
  grid: {
    display       : 'flex',
    flexWrap      : 'wrap',
    justifyContent: 'space-around'
  },
  cell: {
    flex: 1
  },
  gridAlign: {
    top: {
      alignItems: 'flex-start'
    },
    center: {
      alignItems: 'center'
    },
    bottom: {
      alignItems: 'flex-end'
    }
  },
  cellAlign: {
    top: {
      alignSelf: 'flex-start'
    },
    center: {
      alignSelf: 'center'
    },
    bottom: {
      alignSelf: 'flex-end'
    }
  }
};

export default styles;
