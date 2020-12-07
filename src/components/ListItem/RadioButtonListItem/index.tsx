import React from 'react';
import DefaultListItem, { Props } from '@/components/ListItem/DefaultListItem'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

import styles from '@/components/ListItem/RadioButtonListItem/RadioButtonListItem.css';

const RadioButtonListItem = <T extends {}>({ getIsSelected, getName, ...props }: Props<T>) => {
  const sizeClass = `list-item-radio--${props.size}`;

  return (
    <DefaultListItem
      {...props}
      className={classNames(styles['list-item-radio-reverse'])}
      getSelectedMarker={item => (
        <div className={styles['radio-container']}>
          <input
            type='radio'
            className={classNames(styles['list-item-radio'], styles[sizeClass])}
            checked={getIsSelected && getIsSelected(item)}
            onChange={() => {}}
            value={props.getValue ? props.getValue(item) : ''}
            name={getName && getName(item)}
          />
          <span className={styles['radio-check']} />
        </div>
      )}
    />
  );
};

export default RadioButtonListItem;
