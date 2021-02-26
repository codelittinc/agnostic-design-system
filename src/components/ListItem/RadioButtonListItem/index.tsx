import React from 'react';
import DefaultListItem, { Props } from '@/components/ListItem/DefaultListItem'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

import styles from '@/components/ListItem/RadioButtonListItem/RadioButtonListItem.css';

const RadioButtonListItem = <T extends {}>({
  getIsSelected,
  getName,
  variablesClassName,
  ...props
}: Props<T>) => {
  const sizeClass = `list-item-radio--${props.size}`;

  return (
    <DefaultListItem
      {...props}
      getSelectedMarker={item => (
        <div className={styles['radio-container']}>
          <input
            type='radio'
            className={classNames(styles['list-item-radio'], styles[sizeClass])}
            checked={getIsSelected && getIsSelected(item)}
            onChange={() => {}}
            value={props.getValue ? props.getValue(item) : ''}
            name={getName && getName(item)}
            tabIndex={-1}
          />
          <span className={styles['radio-check']} />
        </div>
      )}
      variablesClassName={classNames(styles['list-item-radio-reverse'], variablesClassName)}
    />
  );
};

export default RadioButtonListItem;
