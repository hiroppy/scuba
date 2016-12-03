import React from 'react';
import Container, {Paper} from '../../../../lib';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode = `import Container, {Paper} from 'scuba';

<Paper style={{marginBottom: 15}}>
    <span>This is paper!</span>
</Paper>

<Container
    theme="sunset"
    subColor="dark"
>
    <Paper>
        <span>This is Paper!</span>
    </Paper>
</Container>
`;

const Lists = () => (
  <div>
    <h2 id="papers">Papers</h2>
    <p></p>
    <Paper
      style={{marginBottom: 15}}
    >
      <span>This is paper!</span>
    </Paper>
    <Container
      theme="sunset"
      subColor="dark"
    >
      <Paper>
        <span>This is paper!</span>
        <p>これは紙です！</p>
      </Paper>
    </Container>
    <p>Papers have no custom props.</p>
    {generateCodeTemplate(sampleCode)}
  </div>
);

export default Lists;
