import React, { useState } from 'react';
import classNames from 'classnames';
import isEqual from 'lodash.isequal';

import styles from '@/components/List/List.css';

import ListItem from '@/components/ListItem';

type ListItemCategory = 'simple' | 'icon' | 'checkbox';
type Size = 'large' | 'medium';

const largeSize = 'large';

interface Props<T> {
  getItemLabel: (item: T) => React.ReactNode;
  getItemIcon?: (item?: T) => React.ReactNode;
  getItemKey: (item: T) => string | number;
  getItemName?: (item?: T) => string;
  getItemValue: (item: T) => string | number | string[];
  id: string;
  isItemSelected?: (item?: T) => boolean;
  label?: string;
  listItemCategory: ListItemCategory;
  onClickItem?: (item: T) => void;
  options: [T];
  selected?: T;
  size: Size;
  variablesClassName?: string;
}

const List = <T extends {}>(props: Props<T>) => {
  const {
    label,
    size,
    isItemSelected,
    getItemLabel,
    getItemIcon,
    getItemKey,
    getItemName,
    id,
    onClickItem,
    options,
    selected,
    getItemValue,
    variablesClassName,
    listItemCategory
  } = props;

  const [selectedItem, setSelectedItem] = useState(selected || null);

  const sizeClass = `list--${size}`;
  const listItemSizeClass = `list-item--${size}`;
  const checkboxCategory = 'checkbox';

  const checkBoxClick = item => {
    isEqual(item, selectedItem)
      ? setSelectedItem(null)
      : setSelectedItem(
          options.find(option => getItemValue(option) === getItemValue(item)) || null
        );
  };

  const handleClick = item => {
    if (listItemCategory === checkboxCategory) {
      return onClickItem ? onClickItem(item) : checkBoxClick(item);
    }
    return onClickItem ? onClickItem(item) : null;
  };

  return (
    <div className={classNames(variablesClassName)}>
      {label && <label className={classNames(styles['list-label'])}>{label}</label>}
      <ul id={id} className={classNames(styles.list, styles[sizeClass])}>
        {options.map(item => (
          <li
            key={`${getItemKey(item)}`}
            className={classNames(styles['list-item'], styles[listItemSizeClass])}
            onClick={() => handleClick(item)}
            onKeyPress={() => handleClick(item)}
          >
            <ListItem<T>
              category={listItemCategory}
              size={size}
              item={item}
              getLabel={getItemLabel}
              getIcon={getItemIcon}
              getIsSelected={isItemSelected || (item => isEqual(item, selectedItem))}
              getValue={getItemValue}
              getName={getItemName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

List.defaultProps = {
  size: largeSize,
  options: [{ label: 'Option', value: 'Option' }],
  onChange: () => {},
  listItemCategory: 'simple'
};

export default List;
