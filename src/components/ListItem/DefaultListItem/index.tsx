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
  size: string;
  variablesClassName?: string;
}

const DefaultListItem = <T extends {}>(props: Props<T>) => {
  const { className, size, getLabel, getIcon, getSelectedMarker, item, variablesClassName } = props;

  const sizeSpanClass = `list-item--span-${size}`;

  return (
    <div
      className={classNames(className, styles['list-item'], variablesClassName)}
      role='button'
      aria-pressed='false'
      tabIndex={0}
    >
      <div className={classNames(styles['list-item-div-icon'])}>{getIcon && getIcon(item)}</div>
      <span className={classNames(styles['list-item-span'], styles[sizeSpanClass])}>
        {getLabel(item)}
      </span>
      <div className={classNames(styles['list-item-selected-marker'])}>
        {getSelectedMarker && getSelectedMarker(item)}
      </div>
    </div>
  );
};

DefaultListItem.defaultProps = {
  size: 'large',
  getLabel: () => {}
};

export default DefaultListItem;
