import React from 'react';
import styles from './styles';

class Button extends React.Component {
  state = {
    hover: false
  };

  render() {
    const {
      onClick
    } = this.props;

    let style = this.state.hover ? styles.hover : styles.base;
    Object.assign(style, this.props.style);

    return (
      <a
        style={style}
        onClick={() => onClick ? onClick() : null}
        onMouseOver={() => this.setState({hover: true})}
        onMouseOut={() => this.setState({hover: false})}
      >
        {this.props.children}
      </a>
    );
  }
}
export default Button;
