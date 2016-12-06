import React from 'react';
import Container, { Paper } from '../../../../lib';
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
    <p />
    <Paper
      style={{ marginBottom: 15 }}
    >
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
    <p>Papers have no custom props.</p>
  </div>
);

export default Papers;
