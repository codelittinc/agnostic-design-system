import React from 'react';
import { useSelect } from 'downshift';
import ClassNames from 'classnames';

import styles from '@/components/Dropdown/Dropdown.css';

import IconGear from '@/assets/images/icons/web/gear.svg';
import IconArrowUp from '@/assets/images/icons/web/arrow-up.svg';
import IconArrowDown from '@/assets/images/icons/web/arrow-down.svg';

type Category = 'simple' | 'icon';
type Size = 'large' | 'medium';

interface Props<T> {
  category: Category;
  selected?: T;
  description?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  labelKey: string;
  onChange: (item?: T | null) => void;
  options: [T];
  size: Size;
  valueKey: string;
  variablesClassName?: string;
}

function Dropdown<T extends {}>(props: Props<T>) {
  const onSelectedItemChange = ({ selectedItem }: { selectedItem?: T | null }) =>
    onChange(selectedItem);
  const {
    selected,
    disabled,
    label,
    labelKey,
    size,
    category,
    id,
    onChange,
    options,
    valueKey,
    variablesClassName
  } = props;
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    highlightedIndex
  } = useSelect<T>({
    items: options,
    selectedItem: selected,
    onSelectedItemChange
  });

  const sizeClass = `dropdown--${size}`;
  const listSizeClass = `dropdown-list--${size}`;
  const listItemSizeClass = `dropdown-list-item--${size}`;
  const buttonSpanSizeClass = `dropdown-button-span--${size}`;
  const buttonPressedClass = isOpen ? styles['dropdown-button-pressed'] : '';

  return (
    <div className={ClassNames(variablesClassName)}>
      {label && (
        <label className={ClassNames(styles['dropdown-label'])} {...getLabelProps()}>
          {label}
        </label>
      )}
      <div id={id} className={ClassNames(styles.dropdown, styles[sizeClass])}>
        <button
          type='button'
          {...getToggleButtonProps()}
          className={ClassNames(styles['dropdown-button'], buttonPressedClass)}
          disabled={disabled}
        >
          {category === 'icon' && (
            <div
              className={ClassNames(
                styles['dropdown-icon'],
                styles['dropdown-icon-gear'],
                buttonPressedClass
              )}
            >
              <IconGear width='20' heigth='20' title='Gear Icon' aria-hidden='true' />
            </div>
          )}
          <span className={ClassNames(styles['dropdown-button-span'], styles[buttonSpanSizeClass])}>
            {(selected && selected[labelKey]) || 'Choose an option'}
          </span>
          <div
            className={ClassNames(
              styles['dropdown-icon'],
              styles['dropdown-icon-arrow'],
              buttonPressedClass
            )}
          >
            {isOpen ? (
              <IconArrowUp height='15' width='15' title='Hide options' />
            ) : (
              <IconArrowDown height='15' width='15' title='Show options' />
            )}
          </div>
        </button>
        <ul
          {...getMenuProps()}
          className={ClassNames(styles['dropdown-list'], styles[listSizeClass])}
        >
          {isOpen &&
            options.map((item, index) => (
              <li
                className={ClassNames(
                  styles['dropdown-list-item'],
                  styles[listItemSizeClass],
                  highlightedIndex === index ? styles['dropdown-list-item--selected'] : ''
                )}
                key={`${item[valueKey]}-${index}`}
                {...getItemProps({ item, index })}
              >
                {item[labelKey]}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

Dropdown.defaultProps = {
  category: 'simple',
  id: 'ads-dropdown',
  size: 'large',
  options: [{ label: 'Option', value: 'Option' }],
  onChange: () => {}
};

export default Dropdown;
