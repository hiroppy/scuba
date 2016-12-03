import React from 'react';
import classnames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as highlightColors from 'react-syntax-highlighter/dist/styles';
import styles from './styles';
import js from 'highlight.js/lib/languages/javascript';

// https://github.com/conorhastings/react-syntax-highlighter

type Props = {
  id: string;
  style: Object;
  theme: string;
  children: React.Element<*>;
  language: string;
  fileName: string;
  className: string;
  showLineNumbers: boolean;
  lineNumberStyle: Object;
};

class Code extends React.Component {
  id;

  componentWillMount() {
    this.id = `scuba-code-${Math.floor(Math.random() * 10000)}`;
  }

  componentDidMount() {
    const el = document.getElementById(this.id);

    if (this.props.fileName) el.setAttribute('data-content', this.props.fileName);
  }

  render() {
    const {
      id,
      style,
      theme,
      children,
      language,
      fileName,
      className,
      showLineNumbers,
      lineNumberStyle
    } = this.props;

    return (
      <div>
        {
          fileName ? (
            <style>
              {
                `
                  #${this.id} {
                    padding-top: 40px !important;
                  }
                  #${this.id}:before {
                    content: attr(data-content);
                    padding: 1px 5px;
                  }
                `
              }
            </style>
          ) : null
        }
        <SyntaxHighlighter
          id={classnames(this.id, id)}
          style={highlightColors[theme]}
          customStyle={Object.assign({}, style, styles.pre)}
          language={language}
          className={classnames('scuba-code', className)}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={lineNumberStyle}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Code;
