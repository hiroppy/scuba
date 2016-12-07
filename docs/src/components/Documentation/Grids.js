import React from 'react';
import { Grid, Cell, Paper } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';
import styles from './style.css';

const sampleCode1 = `import {Grid, Cell} from 'scuba';

<Grid responsive={false}>
    <Cell><Paper>Cell-auto</Paper></Cell>
    <Cell><Paper>Cell-auto</Paper></Cell>
</Grid>`;

const sampleCode2 = `<Grid responsive={false}>
    <Cell ratio={1/3}><Paper>Cell-1/3</Paper></Cell>
    <Cell><Paper>Cell-auto</Paper></Cell>
    <Cell ratio={1/4}><Paper>Cell-1/4</Paper></Cell>
</Grid>

<Grid responsive={false}>
    <Cell offset={1/3}><Paper>Cell-offset-1/3</Paper></Cell>
</Grid>`;

const sampleCode3 = `<Grid align="center" responsive={false}>
    <Cell><Paper>Cell-auto</Paper></Cell>
    <Cell ratio={1/2}><Paper>C<br />e<br />l<br />l<br />1/2</Paper></Cell>
    <Cell><Paper>Cell-auto</Paper></Cell>
</Grid>

<Grid responsive={false}>
    <Cell align="center"><Paper>Cell-auto</Paper></Cell>
    <Cell ratio={1/2}><Paper>C<br />e<br />l<br />l<br />1/2</Paper></Cell>
    <Cell align="bottom"><Paper>Cell-auto</Paper></Cell>
</Grid>`;

const sampleCode4 = `<Grid>
    <Cell ratio={1/4}><Paper>Cell-1/4</Paper></Cell>
    <Cell ratio={3/4}><Paper>Cell-3/4</Paper></Cell>
</Grid>`;

const Grids = () => (
  <div>
    <h2 id="grids">Grids</h2>
    <h3>Basic Grids</h3>
    <p>If you do not specify the ratio, Cell is automatically calculated.</p>
    <Grid
      className={styles.grid}
      responsive={false}
    >
      <Cell>
        <Paper>Cell-auto</Paper>
      </Cell>
      <Cell>
        <Paper>Cell-auto</Paper>
      </Cell>
    </Grid>

    {generateCodeTemplate(sampleCode1)}
    <p>You can also set the ratio and the offset.</p>
    <p>
      The defaults are
      <code>auto</code>
      and
      <code>0(margin-left)</code>
      .
    </p>
    <Grid
      className={styles.grid}
      responsive={false}
    >
      <Cell ratio={1/3}>
        <Paper>Cell-1/3</Paper>
      </Cell>
      <Cell>
        <Paper>Cell-auto</Paper>
      </Cell>
      <Cell ratio={1/4}>
        <Paper>Cell-1/4</Paper>
      </Cell>
    </Grid>

    <Grid
      className={styles.grid}
      responsive={false}
    >
      <Cell offset={1/3}>
        <Paper>Cell-offset-1/3</Paper>
      </Cell>
    </Grid>
    {generateCodeTemplate(sampleCode2, 'html')}

    <h3>Alignment Features</h3>
    <p>
      You can set
      <code>top</code>
      ,
      <code>center</code>
      or
      <code>bottom</code>
      to Grid or Cell.
    </p>
    <p>
      The defaults are
      <code>top</code>
      .
    </p>
    <Grid
      className={styles.grid}
      align="center"
      responsive={false}
    >
      <Cell>
        <Paper>Cell-auto</Paper>
      </Cell>
      <Cell ratio={1/2}>
        <Paper>C<br />e<br />l<br />l<br />1/2</Paper>
      </Cell>
      <Cell>
        <Paper>Cell-auto</Paper>
      </Cell>
    </Grid>

    <Grid
      className={styles.grid}
      responsive={false}
    >
      <Cell align="center">
        <Paper>Cell-auto</Paper>
      </Cell>
      <Cell ratio={1/2}>
        <Paper>C<br />e<br />l<br />l<br />1/2</Paper>
      </Cell>
      <Cell align="bottom">
        <Paper>Cell-auto</Paper>
      </Cell>
    </Grid>
    {generateCodeTemplate(sampleCode3, 'html')}

    <h3>Responsive</h3>
    <p>[WIP]</p>
    <p>Responsive is valid by default.</p>
    <Grid
      className={styles.grid}
      responsive
    >
      <Cell ratio={1/4}>
        <Paper>Cell-1/4</Paper>
      </Cell>
      <Cell ratio={3/4}>
        <Paper>Cell-3/4</Paper>
      </Cell>
    </Grid>
    {generateCodeTemplate(sampleCode4, 'html')}
    <h3>Properties</h3>
    <h4>Grid</h4>
    {generateTableTemplate([
      {
        name: 'align',
        type: 'top | bottom | center',
        default: 'top'
      },
      {
        name: 'responsive',
        type: 'boolean',
        default: 'true'
      }
    ])}
    <h4>Cell</h4>
    {generateTableTemplate([
      {
        name: 'ratio',
        type: 'number',
        default: 'auto'
      },
      {
        name: 'align',
        type: 'top | bottom | center',
        default: 'top'
      },
      {
        name: 'offset',
        type: 'number',
        default: '0px'
      }
    ])}
  </div>
);

export default Grids;
