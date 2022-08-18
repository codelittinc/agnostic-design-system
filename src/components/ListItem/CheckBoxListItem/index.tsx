import React from 'react';
import DefaultListItem, { Props } from '@/components/ListItem/DefaultListItem'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';

import styles from '@/components/ListItem/CheckBoxListItem/CheckBoxListItem.css';

const CheckBoxListItem = <T extends {}>({
  isItemDisabled,
  getIsSelected,
  variablesClassName,
  ...props
}: Props<T>) => {
  const sizeClass = `list-item-checkbox--${props.size}`;

  const handleCheckedState = (item: any) => {
    return isItemDisabled || (getIsSelected && getIsSelected(item));
  };

  return (
    <DefaultListItem
      {...props}
      className={classNames(styles['list-item-checkbox-reverse'])}
      isItemDisabled={isItemDisabled}
      getSelectedMarker={item => (
        <div className={styles['checkbox-container']}>
          <input
            type='checkbox'
            className={classNames(styles['list-item-checkbox'], styles[sizeClass])}
            checked={handleCheckedState(item)}
            onChange={() => {}}
            tabIndex={-1}
          />
          <span className={styles['checkbox-check']} />
        </div>
      )}
      variablesClassName={classNames(styles['checkbox-direction'], variablesClassName)}
    />
  );
};

export default CheckBoxListItem;
