import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import Input from '@/components/Input';
import styles from '@/components/Dropdown/Dropdown.css';
import IconGear from '@/assets/images/icons/web/gear.svg';
import getArrowIcon from '@/components/Dropdown/getArrowIcon';
/* eslint-disable */
import { LARGE_SIZE, Category, ListItemCategory, Size } from '@/components/Dropdown';
/* eslint-enable */
import RenderOptions from '../renderOptions';
import { isEmpty } from 'lodash';

export interface Props<T> {
  category: Category;
  disabled?: boolean;
  editable?: boolean;
  filterOptions?: (options: T | T[]) => T | T[];
  getListTitle: (selected: T | T[]) => string;
  getItemKey: (item: T) => string | number;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string | number | string[];
  id: string;
  label?: string;
  listItemCategory: ListItemCategory;
  multiselect?: boolean;
  onChange: (item?: T | T[]) => void;
  onInputChange?: (e: any) => void;
  onStateChange: (state: boolean) => void;
  options: T[];
  required?: boolean;
  selected?: T[] | T;
  selectorText?: string;
  size: Size;
  sort?: (a: T, b: T) => number;
  variablesClassName?: string;
}

const InputDropdown = <T extends {}>(props: Props<T>) => {
  const {
    selected,
    label,
    disabled,
    size,
    category,
    filterOptions,
    getItemLabel,
    getListTitle,
    id,
    onChange,
    onInputChange,
    onStateChange,
    options,
    multiselect,
    selectorText,
    variablesClassName,
    required
  } = props;

  const defaultFilter = options =>
    options.filter(item => getItemLabel(item).toLowerCase().includes(listTitle.toLowerCase()));

  const [listTitle, setListTitle] = useState(selected ? getListTitle(selected) : '');
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [{ height }, setInputPosition] = useState({ height: 0 });
  const [isInputHovered, setIsInputHovered] = useState(false);
  const filteredOptions = (filterOptions || defaultFilter)(options);
  const hasSuggestions = filteredOptions.length > 0;
  const iconCategory = 'icon';
  const autoComplete = 'off';

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        isListOpen &&
        listRef.current &&
        !listRef.current.contains(event.target)
      ) {
        setIsListOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef, isListOpen]);

  useEffect(() => {
    if (isListOpen && listRef && listRef.current) {
      listRef.current.style.top = height + 'px';
    }
  }, [height, isListOpen]);

  const displayOptionsList = () => {
    setIsListOpen(true);
    if (inputRef && inputRef.current) {
      setInputPosition(inputRef.current.getBoundingClientRect());
    }
  };

  const handleClick = (options: T | T[]) => {
    onChange(options);
    setListTitle(isEmpty(options) ? '' : getListTitle(options));
    setIsListOpen(!!multiselect);
  };

  const handleIconCategory = () => {
    if (category === iconCategory) {
      const iconSize = size === LARGE_SIZE ? 20 : 3;
      return (
        <div className={classnames(styles['dropdown-prepend-icon'])}>
          <IconGear width={iconSize} height={iconSize} title='Gear Icon' aria-hidden='true' />
        </div>
      );
    } else {
      return '';
    }
  };

  const handleChangeInput = e => {
    onInputChange && onInputChange(e);
    setListTitle(e.target.value);
    displayOptionsList();
  };

  return (
    <div className={classnames(variablesClassName, styles['dropdown-container'])}>
      <Input
        ref={inputRef}
        id={id}
        size={size}
        placeholder={selectorText}
        disabled={disabled}
        label={label}
        value={listTitle}
        onChange={handleChangeInput}
        onFocus={() => setIsListOpen(hasSuggestions)}
        onMouseEnter={() => setIsInputHovered(true)}
        onMouseLeave={() => setIsInputHovered(false)}
        variablesClassName={classnames(styles['dropdown-input'], variablesClassName)}
        actionIcon={getArrowIcon(isListOpen, size)}
        withActionIcon
        onClickActionIcon={() => setIsListOpen(!isListOpen)}
        prepend={handleIconCategory()}
        onStateChange={onStateChange}
        required={required}
        autoComplete={autoComplete}
      />
      {isListOpen && (
        <RenderOptions<T>
          {...props}
          ref={listRef}
          onChange={item => {
            item && handleClick(item);
          }}
          options={filteredOptions}
          variablesClassName={classnames(
            {
              [styles.hover]: isInputHovered
            },
            variablesClassName
          )}
        />
      )}
    </div>
  );
};

export default InputDropdown;
