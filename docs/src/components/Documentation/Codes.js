import React from 'react';
import { Code } from '../../../../lib';
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
      <a href="https://highlightjs.org/">highlight.js</a>
      .
    </p>
    <p>If you want to use color theme, you specify the theme name to Container props.</p>
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
    {generateTableTemplate([
      {
        name   : 'language',
        type   : 'string',
        default: 'undefined'
      },
      {
        name   : 'fileName',
        type   : 'string',
        default: 'undefined'
      }
    ])}
    {generateCodeTemplate(sampleCode)}
  </div>
);

export default Codes;
