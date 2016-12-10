import React from 'react';
import styles from './style';
import Container, { Button, Paper, Grid, Cell } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode1 = `import Container from 'Scuba';

const Root = () => (
    <Container>
        <p>Hello :)</p>
    </Container>
);`;

const sampleCode2 = `<div>
    <Container
      theme="mint"
      subColor="light"
    >
          <Button>Mint</Button>
          <span>Mint Button</span>
    </Container>
    <Container
        theme="mikan"
        subColor="dark"
    >
          <Button>Mikan</Button>
          <span>Mikan Button</span>
    </Container>
</div>`;

const ContainerSection = () => (
  <div>
    <h2 id="container">Container</h2>
    <p>You must use Container component in the place you want Scuba to apply.</p>
    <p>
      If you specify
      <code>codeColor</code>
      ,
      <em> scuba </em>
      fetches its css from cdnjs.com.
    </p>
    <p>
      {'URL template: https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/styles/$\{codeTheme\}.min.css'}
    </p>
    <p>see:
      <a
        rel="noopener noreferrer"
        href="https://cdnjs.com/libraries/highlight.js/"
        target="_blank"
      >
        cdnjs/highlight.js
      </a>
    </p>
    <p>The theme used on this page is obsidian.</p>
    {generateCodeTemplate(sampleCode1)}

    <h3 id="capsule">capsule</h3>
    <p>The theme is reflected only in Container.</p>
    <Grid>
      <Cell textAlign="left">
        {generateCodeTemplate(sampleCode2, 'html')}
      </Cell>
      <Cell align="center">
        <Paper className={styles.preview}>
          <Container
            theme="mint"
            subColor="light"
          >
            <Button>Mint</Button>
            <span>Mint Button</span>
          </Container>
          <Container
            theme="mikan"
            subColor="dark"
          >
            <Button>Mikan</Button>
            <span>Mikan Button</span>
          </Container>
        </Paper>
      </Cell>
    </Grid>
    <h3>Properties</h3>
    {generateTableTemplate([
      {
        name   : 'theme',
        type   : '(sea | deepSea | sunset | mint | mikan) or hex',
        default: 'sea'
      },
      {
        name   : 'subColor',
        type   : '(light | dark) or hex',
        default: 'light'
      },
      {
        name   : 'codeTheme',
        type   : 'string',
        default: 'undefined'
      }
    ])}
  </div>
);

export default ContainerSection;
