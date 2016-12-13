import React from 'react';
import { Link } from 'react-router';
import { Code } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode = `import Container, {Code} from 'scuba';

<div>
    <Container codeTheme="obsidian">
        <code
            fileName="index.cpp"
            language="cpp"
        >
              {
                \`#include <vector>

int main() {
        std::vector<bool> v(8, false);

        std::for_each(v.begin(), v.end(), [](bool x) {
                std::cout << x << std::endl;
        });
}\`
              }
        </code>
    </Container>
</div>
`;

const Codes = () => (
  <div>
    <h2 id="codes">Codes</h2>
    <p>
      We use
      <a
        href="https://highlightjs.org/"
      >
        highlight.js
      </a>
      .
    </p>
    <p>
      If you want to use a color theme, you specify the theme name to
      <Link to="components/container">
        Container
      </Link>
      props.
    </p>
    <p>Codes provide fileName and language.</p>
    <Code
      fileName="index.cpp"
      language="cpp"
    >
      {
        `#include <vector>

int main() {
        std::vector<bool> v(8, false);

        std::for_each(v.begin(), v.end(), [](bool x) {
                std::cout << x << std::endl;
        });
}`
      }
    </Code>
    {generateCodeTemplate(sampleCode, 'javascript', 'main.js')}
    <h3>Properties</h3>
    <h4>Code</h4>
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
        name   : 'language',
        type   : 'string',
        default: ''
      },
      {
        name   : 'fileName',
        type   : 'string',
        default: ''
      }
    ])}
  </div>
);

export default Codes;
