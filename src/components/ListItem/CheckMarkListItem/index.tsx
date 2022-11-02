import React from 'react';
import DefaultListItem, { Props } from '@/components/ListItem/DefaultListItem';
import classNames from 'classnames';

import styles from '@/components/ListItem/CheckMarkListItem/CheckMarkListItem.css';
import CheckMarkIcon from '@/assets/images/icons/web/checkmark.svg';

const CheckMarkListItem = <T extends {}>({
  getIsSelected,
  variablesClassName,
  ...props
}: Props<T>) => {
  const largeIcon = props.size === 'large';
  const sizeWidthIcon = largeIcon ? 19 : 12;
  const sizeHeightIcon = largeIcon ? 14 : 9;
  const containerSizeClass = `checkmark-container--${props.size}`;

  const handleCheckMark = item => {
    return (
      <div className={classNames(styles['checkmark-container'], styles[containerSizeClass])}>
        <CheckMarkIcon
          className={classNames(
            styles['list-item-checkmark'],
            getIsSelected && getIsSelected(item) ? styles['list-item-checkmark--checked'] : ''
          )}
          width={sizeWidthIcon}
          height={sizeHeightIcon}
        />
      </div>
    );
  };

  return (
    <DefaultListItem
      {...props}
      variablesClassName={
        (styles['list-item-div-checkmark'], styles['list-item-checkmark'], variablesClassName)
      }
      getSelectedMarker={item => handleCheckMark(item)}
    />
  );
};

export default CheckMarkListItem;
