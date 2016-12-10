const styles = {
  grid: {
    width   : '100%',
    display : 'flex',
    flexWrap: 'wrap'
  },
  cell: {
    flex  : 1,
    height: '100%'
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
