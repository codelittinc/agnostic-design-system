import React, { useRef } from 'react';
import classNames from 'classnames';
import { isEqual } from 'lodash';

import styles from '@/components/List/List.css';

import ListItem from '@/components/ListItem';

type ListItemCategory = 'simple' | 'icon' | 'checkbox' | 'radio' | 'checkmark';
type Size = 'large' | 'medium';

const LARGE_SIZE = 'large';
const ENTER_KEY = 13;
const SPACE_BAR_KEY = 32;
const ARROW_DOWN_KEY = 40;
const ARROW_UP_KEY = 38;
const SIMPLE_CATEGORY = 'simple';
const RADIO_CATEGORY = 'radio';

interface Props<T> {
  getItemLabel: (item: T) => React.ReactNode;
  getItemIcon?: (item?: T) => React.ReactNode;
  getItemKey: (item: T) => string | number;
  getItemName?: (item?: T) => string;
  getItemValue: (item: T) => string | number | string[];
  id: string;
  isItemSelected?: (item?: T | T[]) => boolean;
  label?: string;
  listItemCategory?: ListItemCategory;
  multiselect?: boolean;
  nodeAfterItems?: React.ReactNode;
  nodeBeforeItems?: React.ReactNode;
  onChange?: (item?: T | T[]) => void;
  options?: T[];
  selected?: T[] | T;
  size?: Size;
  variablesClassName?: string;
}

const List = <T extends {}>(props: Props<T>, ref?: React.Ref<HTMLDivElement>) => {
  const {
    label,
    size = LARGE_SIZE,
    isItemSelected,
    getItemLabel,
    getItemIcon,
    getItemKey,
    getItemName,
    id,
    onChange = () => {},
    options = [],
    selected,
    getItemValue,
    variablesClassName,
    listItemCategory = SIMPLE_CATEGORY,
    multiselect,
    nodeAfterItems,
    nodeBeforeItems
  } = props;

  const defaultRef = useRef<HTMLDivElement>(null);
  const currentRef = ref || defaultRef;

  const selectedItemsList =
    !multiselect || (multiselect && !Array.isArray(selected))
      ? [selected].filter(v => v)
      : selected;

  const getSelectedItems = item => {
    if (multiselect && Array.isArray(selectedItemsList)) {
      return isEqual(
        item,
        selectedItemsList?.find(s => isEqual(item, s))
      )
        ? selectedItemsList?.filter(s => !isEqual(s, item))
        : [...selectedItemsList, item];
    }

    if (listItemCategory !== RADIO_CATEGORY) {
      return isEqual(item, selected) ? {} : item;
    }

    return item;
  };

  const handleKeyDown = (item, index, event) => {
    if (event.keyCode === ENTER_KEY || event.keyCode === SPACE_BAR_KEY) {
      event.preventDefault();
      return onChange(getSelectedItems(item));
    }

    const listItems = // @ts-expect-error
      currentRef && currentRef.current ? currentRef.current.querySelectorAll('li') : [];

    if (event.keyCode === ARROW_DOWN_KEY && index < listItems.length - 1) {
      const listItem = listItems[index + 1];
      listItem.focus();
    }

    if (event.keyCode === ARROW_UP_KEY && index >= 1) {
      const listItem = listItems[index - 1];
      listItem.focus();
    }
  };

  return (
    <div className={classNames(styles['list-container'], variablesClassName)} ref={currentRef}>
      {label && (
        <label className={classNames(styles['list-label'], variablesClassName)}>{label}</label>
      )}
      <ul
        id={id}
        className={classNames(styles.list, variablesClassName)}
        tabIndex={-1}
        role='list-box'
      >
        {nodeBeforeItems}
        {options &&
          options.map((item, index) => {
            return (
              <ListItem<T>
                category={listItemCategory}
                size={size}
                item={item}
                getLabel={getItemLabel}
                getIcon={getItemIcon}
                getIsSelected={item =>
                  Array.isArray(selectedItemsList)
                    ? !!selectedItemsList?.find(s => isEqual(item, s))
                    : isEqual(selectedItemsList, item)
                }
                getValue={getItemValue}
                getName={getItemName}
                variablesClassName={variablesClassName}
                key={`${getItemKey(item)}`}
                onClick={() => onChange(getSelectedItems(item))}
                onKeyDown={e => handleKeyDown(item, index, e)}
                selected={item =>
                  !!(
                    isItemSelected ||
                    (Array.isArray(selectedItemsList) &&
                      selectedItemsList.find(s => isEqual(item, s)))
                  )
                }
              />
            );
          })}
        {nodeAfterItems}
      </ul>
    </div>
  );
};

const Wrapper = React.forwardRef(List) as <T extends {}>(
  p: Props<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;

export default Wrapper;
