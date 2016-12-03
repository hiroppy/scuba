import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Container, {Code} from '../src';

storiesOf('Code', module).add('list', () => (
  <div style={{padding: 30}}>
    <Container>
      <Code
        fileName="hoge"
        theme="brownPaper"
        language="javascript"
      >
        {
          `import Container from 'scuba';

const num: number = 1;
          `
        }
      </Code>
    </Container>
    <Container subColor="dark">
      <Code
        theme="github"
        language="javascript"
        showLineNumbers
      >
        {
          `
import Container from 'scuba';

const num: number = 1;
          `
        }
      </Code>
    </Container>
    <Container subColor="dark">
      <Code
        theme="rainbow"
        language="html"
        fileName="index.html"
        showLineNumbers
      >
        {
          `<html>
    <div>
        <p>hello</p>
    </div>
</html>
          `
        }
      </Code>
    </Container>

  </div>
));
