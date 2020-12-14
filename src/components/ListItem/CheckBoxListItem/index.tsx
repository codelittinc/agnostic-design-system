import React from 'react';
import DefaultListItem, { Props } from '@/components/ListItem/DefaultListItem'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

import styles from '@/components/ListItem/CheckBoxListItem/CheckBoxListItem.css';

const CheckBoxListItem = <T extends {}>({ getIsSelected, ...props }: Props<T>) => {
  const sizeClass = `list-item-checkbox--${props.size}`;
  return (
    <DefaultListItem
      {...props}
      className={classNames(styles['list-item-checkbox-reverse'])}
      getSelectedMarker={item => (
        <div className={styles['checkbox-container']}>
          <input
            type='checkbox'
            className={classNames(styles['list-item-checkbox'], styles[sizeClass])}
            checked={getIsSelected && getIsSelected(item)}
            onChange={() => {}}
          />
          <span className={styles['checkbox-check']} />
        </div>
      )}
    />
  );
};

export default CheckBoxListItem;
