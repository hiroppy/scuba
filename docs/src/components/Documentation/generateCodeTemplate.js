import React from 'react';
import {Code} from '../../../../lib';
import commonStyles from '../../common';

const generateCodeTemplate = (codeStr) => (
  <Code
    theme="tomorrowNightBlue"
    language="javascript"
    className={commonStyles.code}
  >
    {codeStr}
  </Code>
);

export default generateCodeTemplate;
