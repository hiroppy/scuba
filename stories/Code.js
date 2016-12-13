import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Container, { Code } from '../src';

storiesOf('Code', module).add('list', () => (
  <div style={{ padding: 30 }}>
    <Container
      codeTheme="obsidian"
    >
      <Code
        fileName="hoge"
        language="javascript"
      >
        {
          `import Container from 'scuba';

const num: number = 1;
const Root = () => (
    <div onClick={(e) => console.log(e)}>
        Root
    </div>
);
          `
        }
      </Code>
    </Container>
    <Container subColor="dark">
      <Code
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
        language="html"
        fileName="index.html"
        showLineNumbers
      >
        {
          `<html>
    <div class="hello">
        <p>hello</p>
    </div>
</html>
          `
        }
      </Code>
    </Container>

  </div>
));
