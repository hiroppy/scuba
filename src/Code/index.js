// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import styles from './styles';
import highlight from 'highlight.js';

type Props = {
  id: string;
  language: string;
  fileName: string;
};

class Code extends React.Component<void, CommonProps & Props, void> {
  id: string;
  code: HTMLElement;

  componentWillMount() {
    this.id = `scuba-code-${Math.floor(Math.random() * 10000)}`;
  }

  componentDidMount() {
    highlight.highlightBlock(findDOMNode(this.code));

    const el = document.getElementById(this.id);
    if (this.props.fileName && el) el.setAttribute('data-content', this.props.fileName);
  }

  render() {
    const {
      id,
      style,
      children,
      language,
      fileName,
      className
    } = this.props;

    return (
      <div>
        {
          fileName ? (
            <style>
              {
                `
                  #${this.id}:before {
                    content: attr(data-content);
                    padding: 1px 5px;
                  }
                `
              }
            </style>
          ) : null
        }
        <pre
          id={classnames(this.id, id)}
          style={Object.assign({}, styles.pre, style)}
          className={classnames('scuba-code', className)}
        >
          <code
            ref={(ref) => this.code = ref}
            style={Object.assign({}, styles.code)}
            className={classnames(language, className)}
          >
            {children}
          </code>
        </pre>
      </div>
    );
  }
}

export default Code;
