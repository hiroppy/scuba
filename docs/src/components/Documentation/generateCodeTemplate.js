import React from 'react';
import {Code} from '../../../../lib';
import commonStyles from '../../common';

const generateCodeTemplate = (codeStr, language) => (
  <Code
    language={language ? language : 'javascript'}
  >
    {codeStr}
  </Code>
);

export default generateCodeTemplate;
