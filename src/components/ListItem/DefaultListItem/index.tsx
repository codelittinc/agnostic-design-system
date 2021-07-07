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
  item: T;
  key: number | string;
  onClick?: (event: React.MouseEvent) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  selected: (item: T) => boolean;
  size: string;
  variablesClassName?: string;
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
    selected,
    variablesClassName
  } = props;

  const sizeLabelClass = `list-item-label--${size}`;

  return (
    <li
      key={key}
      onClick={e => onClick(e)}
      onKeyDown={e => onKeyDown(e)}
      role='option'
      className={classNames(
        className,
        styles['list-item'],
        selected(item) && styles['list-item-selected'],
        variablesClassName
      )}
      tabIndex={0}
    >
      <div className={classNames(styles['list-item-icon'], !getIcon && styles['div-hidden'])}>
        {getIcon && getIcon(item)}
      </div>
      <span
        className={classNames(
          styles['list-item-label'],
          selected(item) && styles['list-item-label-selected'],
          styles[sizeLabelClass]
        )}
      >
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
