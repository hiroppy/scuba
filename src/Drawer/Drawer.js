// @flow

import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import excludeProps from '../utils/excludeProps';
import styles from './style';

type Props = {
  width?: string | number;
  opened?: boolean;
  onChange: Function;
  position?: 'left' | 'right';
  paddingWidth: number;
  displayedOverlay: boolean;
};

const Drawer = (props: CommonProps & Props) => {
  const style = Object.assign(
    {},
    styles.container,
    props.position === 'right' ? { right: 0 } : { left: 0 },
    props.style,
    { width: props.width },
    (props.paddingWidth !== 10 ? {
      paddingLeft : props.paddingWidth,
      paddingRight: props.paddingWidth
    } : {})
  );

  if (!props.opened) {
    style.transform = `translate(-${props.width + props.paddingWidth * 2}px, 0)`;
  }
  else {
    style.transform = 'translate(0, 0)';
  }

  // [TODO] fix
  if (props.displayedOverlay && props.opened) {
    document.querySelector('body').style.overflow = 'hidden';
  }
  else if (props.displayedOverlay && !props.opened) {
    document.querySelector('body').style.overflow = 'auto';
  }

  return (
    <div>
      {
        props.displayedOverlay && props.opened ? (
          <div
            style={styles.overlay}
            onClick={() => {props.onChange ? props.onChange() : undefined;}}
          />
        ) : null
      }
      <div
        {
          ...excludeProps(props, [
            'width', 'opened', 'onChange', 'position', 'paddingWidth', 'displayedOverlay'
          ])
        }
        className={classnames('scuba-drawer', props.className)}
        style={style}
      >
        {props.children}
      </div>
    </div>
  );
};

Drawer.defaultProps = {
  width           : 200,
  opened          : false,
  position        : 'left',
  paddingWidth    : 10,
  displayedOverlay: false
};

export default Drawer;
