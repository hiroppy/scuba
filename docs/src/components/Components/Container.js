import React from 'react';
import { Link } from 'react-router';
import styles from './style';
import Container, { Blockquote, Button, Paper, Grid, Cell } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';


const sampleCode0 = `import Container from 'scuba';

<Container
    theme="#f5f5f5"
    subColor="#333"
/>`;

const sampleCode1 = `import Container from 'Scuba';

const Root = () => (
    <Container>
        <p>Hello :)</p>
    </Container>
);`;

const sampleCode2 = `import Container, {Button} from 'scuba';

<div>
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
    <h2>Container</h2>
    <p>In the scuba, this Container component is required to be used as a wrapper.</p>
    <p>
      {'You can choose 5 themes and 2 subColor. Let\'s operate the toolbar below this site😊'}
    </p>
    <p>If you do not like it, you can specify a color.</p>
    {generateCodeTemplate(sampleCode0, 'javascript', 'customization')}
    <h3>Capsule</h3>
    <p>The theme and subColor are reflected only in Container.</p>
    <Grid>
      <Cell textAlign="left" margin="10px">
        {generateCodeTemplate(sampleCode2)}
      </Cell>
      <Cell align="center" margin="10px">
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
    <h3>Syntax highlighting for Code Component</h3>
    <p>
      If you specify
      <code>codeTheme</code>
      ,
      <em> scuba </em>
      fetches its css from cdnjs.com.
    </p>
    <p>generated URL template in Container:</p>
    <Blockquote style={{ overflowY: 'auto' }}>
      <code>
        {'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/styles/$\{codeTheme\}.min.css'}
      </code>
    </Blockquote>
    <p>see:
      <a
        rel="noopener noreferrer"
        href="https://cdnjs.com/libraries/highlight.js/"
        target="_blank"
      >
        cdnjs/highlight.js
      </a>
    </p>
    <p>e.g. The theme used on this site is obsidian.</p>
    {generateCodeTemplate(sampleCode1, 'javascript', 'obsidian')}
    <p>Detail: <Link to="/components/codes">Codes</Link></p>
    <p>
      We recommend you to write in HTML(e.g. index.html) as
      <code>
        Link
      </code>
      instead of specifying
      <code>
        codeTheme
      </code>
      .
    </p>
    <h3>Properties</h3>
    <h4>Container</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      },
      {
        name   : 'theme',
        type   : '(sea | deepSea | sunset | mint | mikan) or hex',
        default: 'sea'
      },
      {
        name   : 'subColor',
        type   : '(dark | light) or hex',
        default: 'dark'
      },
      {
        name   : 'codeTheme',
        type   : 'string',
        default: ''
      }
    ])}
  </div>
);

export default ContainerSection;
