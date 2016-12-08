import React from 'react';
import { Link } from 'react-router';
import Container, { Code } from '../../../../lib';

const GettingStarted = () => (
  <div>
    <h1>Getting Started</h1>
    <hr />
    <p>Install the module with</p>
    <Code language="bash">$ npm install --save scuba</Code>
    <p>
      We recommend using
      <a
        rel="noopener noreferrer"
        href="https://necolas.github.io/normalize.css/"
        target="_blank"
      >
        normalize.css
      </a>
      or other.
    </p>
    <h3>Usage</h3>
    <Code
      fileName="index.js"
      language="javascript"
    >{
      `import React from 'react';
import Container, {TextField} from 'scuba';

const Root = () => (
    <Container
        theme="mint"
        subColor="dark"
    >
        <TextField placeholder="hello:)" />
    </Container>
);
      `
    }
    </Code>
    <p>
      First, You use
      <code>Container</code>
      to decide the theme and subColor.
    </p>
    <p>The theme and subColor apply within that range.</p>
    <p>
      Details:
      <Link to="components/container">Capsule</Link>
    </p>
  </div>
);

export default GettingStarted;
