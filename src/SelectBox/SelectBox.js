// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

type SelectBoxProps = {
  width?: number | string;
  height?: number | string;
  listHeight: number | string;
  disabled?: boolean; // 未実装
  listPosition?: 'top' | 'bottom';
  onChange?: Function;
};

type SelectBoxState = {
  displayedSelects: boolean;
  currentSelectedLabel: string;
};

class SelectBox extends React.Component<void, CommonProps & SelectBoxProps, SelectBoxState> {
  state = {
    displayedSelects    : false,
    currentSelectedLabel: ''
  };

  componentWillMount() {
    let defaultLabel = '';

    const children = this.props.children;

    React.Children.forEach(children, (child) => {
      if (child.props.default) defaultLabel = child.props.children;
    });

    if (React.Children.count(children) !== 0) {
      this.setState({
        currentSelectedLabel: defaultLabel === '' ?
          React.Children.toArray(children)[0].props.children :
          defaultLabel
      });
    }
  }

  onClickBox = this.onClick.bind(this);
  onClickSelect = this.onClickSelectColumn.bind(this);

  onClick() {
    this.setState({ displayedSelects: !this.state.displayedSelects });
  }

  onClickSelectColumn(e: any) {
    const currentSelectedLabel = e.nativeEvent.target;
    const text  = currentSelectedLabel.textContent;
    const value = currentSelectedLabel.getAttribute('data-value');

    this.setState({
      currentSelectedLabel: text,
      displayedSelects    : false
    });

    if (this.props.onChange) {
      this.props.onChange((value === null ? text : value));
    }
  }

  render() {
    const {
      style,
      width,
      height,
      children,
      className,
      listHeight,
      listPosition
    } = this.props;

    return (
      <div
        style={{ width, height, ...styles.selectContainer }}
        className="scuba-selectcontainer"
      >
        <div
          style={Object.assign(
            {},
            styles.selectBox,
            style
          )}
          onClick={this.onClickBox}
          className={classnames('scuba-selectbox', className)}
        >
          {this.state.currentSelectedLabel}
        </div>
        <div
          style={Object.assign(
            {},
            { display: this.state.displayedSelects ? 'block' : 'none' },
            (listPosition === 'top' ? { bottom: '100%' } : { top: '100%' }),
            (listHeight ? { height: listHeight } : {}),
            styles.selectList
          )}
          onClick={this.onClickSelect}
          className={
            classnames('scuba-selectlist',
              this.state.displayedSelects ? 'scuba-selectlist-active' : null
            )
          }
        >
          {children}
        </div>
        <div style={styles.selectBoxArrow}>
          <svg
            style={styles.arrowIcon}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="scuba-selectbox-arrow-icon"
          >
            <polygon
              fill="none"
              points={
              listPosition === 'top' ?
                '0, 10 5, 0 10, 10' :
                '0, 0 5, 10 10, 0'
            }
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default SelectBox;
