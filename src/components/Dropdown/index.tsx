import React from 'react';
import { useSelect } from 'downshift';
import classNames from 'classnames';
import isEqual from 'lodash.isequal';

import styles from '@/components/Dropdown/Dropdown.css';

import IconGear from '@/assets/images/icons/web/gear.svg';
import IconArrowUp from '@/assets/images/icons/web/arrow-up.svg';
import IconArrowDown from '@/assets/images/icons/web/arrow-down.svg';
import ListItem from '@/components/ListItem';

type Category = 'simple' | 'icon';
type ListItemCategory = 'simple' | 'checkbox';
type Size = 'large' | 'medium';

const largeSize = 'large';
const simpleCategory = 'simple';

interface Props<T> {
  category: Category;
  description?: string;
  disabled?: boolean;
  getDropdownIcon?: (item?: T) => React.ReactNode;
  getItemLabel: (item: T) => React.ReactNode;
  getItemIcon?: (item?: T) => React.ReactNode;
  id: string;
  label?: string;
  listItemCategory: ListItemCategory;
  onChange: (item?: T | null) => void;
  options: [T];
  selected?: T;
  size: Size;
  valueKey: string;
  variablesClassName?: string;
}

const Dropdown = <T extends {}>(props: Props<T>) => {
  const onSelectedItemChange = ({ selectedItem }: { selectedItem?: T | null }) =>
    onChange(selectedItem);

  const {
    selected,
    disabled,
    label,
    size,
    category,
    getDropdownIcon,
    getItemLabel,
    getItemIcon,
    id,
    onChange,
    options,
    valueKey,
    variablesClassName,
    listItemCategory
  } = props;

  const {
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    isOpen
  } = useSelect<T>({
    items: options,
    selectedItem: selected,
    onSelectedItemChange
  });

  const iconCategory = 'icon';

  const sizeClass = `dropdown--${size}`;
  const listSizeClass = `dropdown-list--${size}`;
  const listItemSizeClass = `dropdown-list-item--${size}`;
  const buttonSpanSizeClass = `dropdown-button-span--${size}`;
  const buttonPressedClass = isOpen ? styles['dropdown-button-pressed'] : '';

  const getGearIcon = () => {
    const iconSize = size === largeSize ? 20 : 13;
    return <IconGear width={iconSize} height={iconSize} title='Gear Icon' aria-hidden='true' />;
  };

  const handleArrowIcon = isOpen => {
    const iconTitle = isOpen ? 'Hide Options' : 'Show Options';
    const IconType = isOpen ? IconArrowUp : IconArrowDown;
    const iconWidthSize = size === largeSize ? 15 : 9;
    const iconHeightSize = size === largeSize ? 9 : 5;

    return <IconType width={iconWidthSize} height={iconHeightSize} title={iconTitle} />;
  };

  const handleCategoryIcon = item => {
    if (category === iconCategory) {
      return (
        <div
          className={classNames(
            styles['dropdown-icon'],
            styles['dropdown-icon-gear'],
            buttonPressedClass
          )}
        >
          {getDropdownIcon ? getDropdownIcon(item) : getGearIcon()}
        </div>
      );
    } else {
      return '';
    }
  };

  return (
    <div className={classNames(variablesClassName)}>
      {label && (
        <label className={classNames(styles['dropdown-label'])} {...getLabelProps()}>
          {label}
        </label>
      )}
      <div id={id} className={classNames(styles.dropdown, styles[sizeClass])}>
        <button
          type='button'
          {...getToggleButtonProps()}
          className={classNames(styles['dropdown-button'], buttonPressedClass)}
          disabled={disabled}
        >
          {handleCategoryIcon(selected)}
          <span className={classNames(styles['dropdown-button-span'], styles[buttonSpanSizeClass])}>
            {(selected && getItemLabel(selected)) || 'Choose an option'}
          </span>
          <div
            className={classNames(
              styles['dropdown-icon'],
              styles['dropdown-icon-arrow'],
              buttonPressedClass
            )}
          >
            {handleArrowIcon(isOpen)}
          </div>
        </button>
        <ul
          {...getMenuProps()}
          className={classNames(
            styles['dropdown-list'],
            styles[listSizeClass],
            !isOpen && styles['dropdown-list--hidden']
          )}
        >
          {isOpen &&
            options.map((item, index) => (
              <li
                key={`${item[valueKey]}-${index}`}
                className={classNames(
                  styles['dropdown-list-item'],
                  styles[listItemSizeClass],
                  highlightedIndex === index ? styles['dropdown-list-item--visit'] : '',
                  isEqual(item, selected) ? styles['dropdown-list-item--selected'] : ''
                )}
                {...getItemProps({ item, index })}
              >
                <ListItem<T>
                  category={listItemCategory}
                  size={size}
                  item={item}
                  key={`${item[valueKey]}-${index}`}
                  getLabel={getItemLabel}
                  getIcon={getItemIcon}
                  getIsSelected={item => isEqual(item, selected)}
                  getValue={item[valueKey]}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  category: simpleCategory,
  size: largeSize,
  options: [{ label: 'Option', value: 'Option' }],
  onChange: () => {},
  getItemLabel: () => {},
  listItemCategory: simpleCategory
};

export default Dropdown;
