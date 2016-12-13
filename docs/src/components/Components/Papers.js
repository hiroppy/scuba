import React from 'react';
import Container, { Paper } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode = `import Container, {Paper} from 'scuba';

<div>
    <Paper style={{marginBottom: 15}}>
        <span>This is a paper!</span>
    </Paper>

    <Container
        theme="sunset"
        subColor="dark"
    >
        <Paper>
            <span>This is a paper!</span>
            <p>これは紙です！</p>
        </Paper>
    </Container>
</div>`;

const Papers = () => (
  <div>
    <h2 id="papers">Papers</h2>
    <p>Papers give a container frame.</p>
    <p>If you select dark as subColor, background-color becomes light.</p>
    <Paper style={{ marginBottom: 15 }}>
      <span>This is a paper!</span>
    </Paper>
    <Container
      theme="sunset"
      subColor="dark"
    >
      <Paper>
        <span>This is a paper!</span>
        <p>これは紙です！</p>
      </Paper>
    </Container>
    {generateCodeTemplate(sampleCode)}
    <h3>Properties</h3>
    <h4>Paper</h4>
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
        name   : 'backgroundColor',
        type   : 'string',
        default: 'right or dark(depends on subColor)'
      }
    ])}
  </div>
);

export default Papers;
