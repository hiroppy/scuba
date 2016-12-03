import React from 'react';
import classnames from 'classnames';
import styles from './styles';

const createClasses = (disabled, className, clear) => {
  if (disabled) return classnames('scuba-button-disabled', className);
  if (clear) return classnames('scuba-button-clear', className); // [TODO] fix
  return classnames('scuba-button', className);
};

class Button extends React.Component {
  render() {
    const {
      style,
      clear,
      onClick,
      disabled,
      children,
      className
    } = this.props;

    const buttonStyle = clear ? styles.clear : style;

    return (
      <a
        {...this.props}
        style={Object.assign({}, styles.base, buttonStyle)}
        onClick={() => onClick && !disabled ? onClick() : null}
        className={createClasses(disabled, className, clear)}
      >
        {children}
      </a>
    );
  }
}

export default Button;
