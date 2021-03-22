import React from 'react';
import classNames from 'classnames';

import styles from '@/components/ListItem/DefaultListItem/DefaultListItem.css';

export interface Props<T> {
  className?: string;
  getLabel: (item: T) => React.ReactNode;
  getIcon?: (item?: T) => React.ReactNode;
  getIsSelected?: (item: T) => boolean;
  getName?: (item?: T) => string;
  getSelectedMarker?: (item: T) => React.ReactNode;
  getValue: (item: T) => string | number | string[];
  onClick?: (event: React.MouseEvent) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  item: T;
  size: string;
  variablesClassName?: string;
  key: number | string;
}

const DefaultListItem = <T extends {}>(props: Props<T>) => {
  const {
    className,
    size,
    getLabel,
    getIcon,
    getSelectedMarker,
    onClick = () => {},
    onKeyDown,
    key,
    item,
    variablesClassName
  } = props;

  const sizeLabelClass = `list-item-label--${size}`;

  return (
    <li
      key={key}
      onClick={e => onClick(e)}
      onKeyDown={e => onKeyDown(e)}
      role='option'
      className={classNames(className, styles['list-item'], variablesClassName)}
      tabIndex={0}
    >
      <div className={classNames(styles['list-item-icon'], !getIcon && styles['div-hidden'])}>
        {getIcon && getIcon(item)}
      </div>
      <span className={classNames(styles['list-item-label'], styles[sizeLabelClass])}>
        {getLabel(item)}
      </span>
      <div
        className={classNames(
          styles['list-item-selected-marker'],
          !getSelectedMarker && styles['div-hidden']
        )}
      >
        {getSelectedMarker && getSelectedMarker(item)}
      </div>
    </li>
  );
};

DefaultListItem.defaultProps = {
  size: 'large',
  getLabel: () => {}
};

export default DefaultListItem;
