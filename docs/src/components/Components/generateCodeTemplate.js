import React from 'react';
import { Code } from '../../../../src';
import commonStyles from '../../common';

const generateCodeTemplate = (codeStr, language, fileName) => (
  <Code
    fileName={fileName}
    language={language ? language : 'javascript'}
  >
    {codeStr}
  </Code>
);

export default generateCodeTemplate;
