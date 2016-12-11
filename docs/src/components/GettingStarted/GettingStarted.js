import React from 'react';
import { Link } from 'react-router';
import Container, { Code, List, Item } from '../../../../src';

const GettingStarted = () => (
  <div>
    <h1>Getting Started</h1>
    <hr />
    <p>Install the module with</p>
    <Code language="bash">$ npm install --save scuba</Code>
    <p>
      We recommend using
      CSS resets like
      <a
        rel="noopener noreferrer"
        href="https://necolas.github.io/normalize.css/"
        target="_blank"
      >
        normalize.css
      </a>
      .
    </p>
    <h3>Usage</h3>
    <List type="decimal">
      <Item><p>Set Container where you want to apply theme and subColor.</p></Item>
      <Item>
        <p>
          Decide theme and subColor.
          <Link to="concept/colors">  Colors</Link>
        </p>
      </Item>
      <Item><p>Decide background color.(Scuba does not provide it)</p></Item>
      <Item><p>Hope you enjoy it !</p></Item>
    </List>
    <Code
      fileName="index.js"
      language="javascript"
    >{
      `import React from 'react';
import ReactDOM from 'react-dom';
import Container, {TextField} from 'scuba';

const Root = () => (
    <Container
        theme="mint"
        subColor="dark"
    >
        <TextField placeholder="hello:)" />
    </Container>
);

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);`
    }
    </Code>
  </div>
);

export default GettingStarted;
