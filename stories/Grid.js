import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Container, { Grid, Cell } from '../src';

const styles = {
  container: {
    width  : '80%',
    margin : 30,
    padding: 30,
    border : '1px solid #333'
  },
  cell: {
    background: '#777'
  }
};

storiesOf('Grid', module).add('list', () => (
  <div style={styles.container}>
    <Container>
      <Grid responsive={false}>
        <Cell
          ratio={1 / 2}
          margin="10px"
        >
          <div style={styles.cell}>Cell-1/2</div>
        </Cell>
        <Cell margin="10px">
          <div style={styles.cell}>Cell-auto</div>
        </Cell>
        <Cell margin="10px">
          <div style={styles.cell}>Cell-auto</div>
        </Cell>
      </Grid>

      <h3 style={{ marginTop: 30 }}>Responsive</h3>
      <Grid style={{ marginTop: 30 }}>
        <Cell
          offset={1 / 2}
        >
          <div style={styles.cell}>Cell-offset-1/2</div>
        </Cell>
      </Grid>

      <Grid style={{ marginTop: 30 }}>
        <Cell
          ratio={1 / 3}
          margin="10px"
        >
          <div style={styles.cell}>Cell-1/3</div>
        </Cell>
        <Cell margin="10px">
          <div style={styles.cell}>Cell-auto</div>
        </Cell>
        <Cell
          ratio={1 / 4}
          margin="10px"
        >
          <div style={styles.cell}>Cell-1/4</div>
        </Cell>
      </Grid>

      <Grid
        style={{ marginTop: 30 }}
        align="bottom"
      >
        <Cell
          ratio={1 / 3}
          margin="10px"
        >
          <div style={styles.cell}>Cell-1/3</div>
        </Cell>
        <Cell margin="10px">
          <div style={styles.cell}>
            h<br />
            e<br />
            l<br />
            l<br />
            o<br />
          </div>
        </Cell>
        <Cell
          margin="10px"
          ratio={1 / 4}
        >
          <div style={styles.cell}>Cell-1/4</div>
        </Cell>
      </Grid>

      <Grid style={{ marginTop: 30 }}>
        <Cell
          ratio={1 / 3}
          align="center"
          margin="10px"
        >
          <div style={styles.cell}>Cell-1/3</div>
        </Cell>
        <Cell>
          <div style={styles.cell}>
            h<br />
            e<br />
            l<br />
            l<br />
            o<br />
          </div>
        </Cell>
        <Cell
          ratio={1 / 4}
          align="bottom"
          margin="10px"
        >
          <div style={styles.cell}>Cell-1/4</div>
        </Cell>
      </Grid>
    </Container>
  </div>
));
