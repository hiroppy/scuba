import React from 'react';
import {Code} from '../../../../lib';
import commonStyles from '../../common';

const generateCodeTemplate = (codeStr) => (
  <Code
    language="javascript"
  >
    {codeStr}
  </Code>
);

export default generateCodeTemplate;
