import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import Input from '@/components/Input';
import styles from '@/components/Dropdown/Dropdown.css';
import IconGear from '@/assets/images/icons/web/gear.svg';
import IconArrowUp from '@/assets/images/icons/web/arrow-up.svg';
import IconArrowDown from '@/assets/images/icons/web/arrow-down.svg';
import List from '@/components/List';

type Category = 'simple' | 'icon';
type ListItemCategory = 'simple' | 'checkbox';
type Size = 'large' | 'medium';

const largeSize = 'large';
const simpleCategory = 'simple';

interface Props<T> {
  category: Category;
  description?: string;
  getItemKey: (item: T) => string | number;
  getItemLabel: (item: T) => string;
  getItemIcon?: (item?: T) => React.ReactNode;
  getItemValue: (item: T) => string | number | string[];
  id: string;
  label?: string;
  listItemCategory: ListItemCategory;
  onChange: (item?: T | null) => void;
  options: [T];
  placeholder?: string;
  selected?: T[] | T;
  multiselect?: boolean;
  size: Size;
  value: string;
  variablesClassName?: string;
}

const Dropdown = <T extends {}>(props: Props<T>) => {
  const {
    selected,
    label,
    size,
    category,
    getItemKey,
    getItemLabel,
    getItemValue,
    getItemIcon,
    id,
    onChange,
    placeholder,
    options,
    value,
    multiselect,
    variablesClassName,
    listItemCategory
  } = props;

  const [initialValue, setInitialValue] = useState(value);
  const [selectedItem, setSelectedItem] = useState(selected);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [{ height }, setInputPosition] = useState({ height: 0 });
  const [optionsSuggestions, setOptionsSuggestions] = useState<T[]>(options);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const hasSuggestions = optionsSuggestions.length > 0;
  const iconCategory = 'icon';

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

  const getItemSelected = item => {
    if (multiselect && Array.isArray(item)) {
      setInitialValue(
        item
          .map(item => getItemLabel(item))
          .join(', ')
          .replace(/^,|,$/g, '')
      );
    } else {
      setInitialValue(getItemLabel(item));
    }
  };

  useEffect(() => {
    getItemSelected(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    if (isListOpen && listRef && listRef.current) {
      listRef.current.style.top = height + 'px';
    }
  }, [height, isListOpen]);

  const cleanSuggestions = () => {
    setIsListOpen(false);
  };

  const handleClick = (option: T) => {
    onChange(option);
    setSelectedItem(option);
    cleanSuggestions();
  };

  const handleIconCategory = () => {
    if (category === iconCategory) {
      const iconSize = size === largeSize ? 20 : 3;
      return (
        <div className={classnames(styles['dropdown-prepend-icon'])}>
          <IconGear width={iconSize} height={iconSize} title='Gear Icon' aria-hidden='true' />
        </div>
      );
    } else {
      return '';
    }
  };

  const handleArrowIcon = isOpen => {
    const iconTitle = isOpen ? 'Hide Options' : 'Show Options';
    const IconType = isOpen ? IconArrowUp : IconArrowDown;
    const iconWidthSize = size === largeSize ? 15 : 9;
    const iconHeightSize = size === largeSize ? 9 : 5;

    return (
      <IconType
        className={styles['dropdown-append-icon']}
        width={iconWidthSize}
        height={iconHeightSize}
        title={iconTitle}
      />
    );
  };

  const displayOptionsList = () => {
    setIsListOpen(true);
    if (inputRef && inputRef.current) {
      setInputPosition(inputRef.current.getBoundingClientRect());
    }
  };

  const handleChangeInput = e => {
    const newValue = e.target.value;
    setInitialValue(newValue);
    setOptionsSuggestions(options.filter(item => getItemLabel(item).includes(newValue)));
    displayOptionsList();
  };

  const handleListBehavior = () => {
    setIsListOpen(!isListOpen);
  };

  const renderOptions = () => (
    <List<T>
      ref={listRef}
      size={size}
      options={optionsSuggestions}
      onChange={item => {
        item && handleClick(item);
      }}
      getItemKey={item => getItemKey(item)}
      getItemLabel={item => getItemLabel(item)}
      getItemValue={item => getItemValue(item)}
      getItemIcon={item => getItemIcon && getItemIcon(item)}
      variablesClassName={classnames(
        styles['dropdown-list'],
        {
          [styles.hover]: isInputHovered
        },
        variablesClassName
      )}
      listItemCategory={listItemCategory}
      selected={selectedItem}
      multiselect={multiselect}
      id={`${id}-list`}
    />
  );

  return (
    <div className={classnames(variablesClassName, styles['dropdown-container'])}>
      <Input
        ref={inputRef}
        id={id}
        size={size}
        placeholder={placeholder}
        label={label}
        value={initialValue}
        onChange={handleChangeInput}
        onFocus={() => setIsListOpen(hasSuggestions)}
        onMouseEnter={() => setIsInputHovered(true)}
        onMouseLeave={() => setIsInputHovered(false)}
        variablesClassName={classnames(styles['dropdown-input'], variablesClassName)}
        actionIcon={handleArrowIcon(isListOpen)}
        withActionIcon
        onClickActionIcon={handleListBehavior}
        prepend={handleIconCategory()}
      />
      {isListOpen && renderOptions()}
    </div>
  );
};

Dropdown.defaultProps = {
  category: simpleCategory,
  size: largeSize,
  options: [],
  onChange: () => {},
  listItemCategory: simpleCategory
};

export default Dropdown;
