import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import Input from '@/components/Input';
import styles from '@/components/Dropdown/Dropdown.css';
import IconGear from '@/assets/images/icons/web/gear.svg';
import IconArrowUp from '@/assets/images/icons/web/arrow-up.svg';
import IconArrowDown from '@/assets/images/icons/web/arrow-down.svg';
import List from '@/components/List';
import Button from '../Button';

type Category = 'simple' | 'icon';
type ListItemCategory = 'simple' | 'checkbox';
type Size = 'large' | 'medium';

const largeSize = 'large';
const simpleCategory = 'simple';

interface Props<T> {
  category: Category;
  description?: string;
  disabled?: boolean;
  editable?: boolean;
  filterOptions?: (options: T | T[]) => T | T[];
  getListTitle: (selected: T | T[]) => string;
  getItemKey: (item: T) => string | number;
  getItemLabel: (item: T) => string;
  getItemIcon?: (item?: T) => React.ReactNode;
  getItemValue: (item: T) => string | number | string[];
  id: string;
  label?: string;
  listItemCategory: ListItemCategory;
  multiselect?: boolean;
  onChange: (item?: T | T[]) => void;
  onInputChange?: (e: any) => void;
  onStateChange: (state: boolean) => void;
  options: T[];
  placeholder?: string;
  selected?: T[] | T;
  size: Size;
  variablesClassName?: string;
}

const Dropdown = <T extends {}>(props: Props<T>) => {
  const {
    selected,
    label,
    disabled,
    size,
    category,
    filterOptions,
    editable,
    getItemKey,
    getItemLabel,
    getItemValue,
    getItemIcon,
    getListTitle,
    id,
    onChange,
    onInputChange,
    placeholder,
    options,
    multiselect,
    variablesClassName,
    listItemCategory,
    onStateChange
  } = props;

  const defaultFilter = options => options.filter(item => getItemLabel(item).includes(listTitle));

  const [listTitle, setListTitle] = useState(selected ? getListTitle(selected) : label || '');
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [{ height }, setInputPosition] = useState({ height: 0 });
  const [isInputHovered, setIsInputHovered] = useState(false);
  const filteredOptions = editable ? (filterOptions || defaultFilter)(options) : options;
  const hasSuggestions = filteredOptions.length > 0;
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

  useEffect(() => {
    if (isListOpen && listRef && listRef.current) {
      listRef.current.style.top = height + 'px';
    }
  }, [height, isListOpen]);

  const displayOptionsList = () => {
    editable ? setIsListOpen(true) : setIsListOpen(!isListOpen);
    if (editable && inputRef && inputRef.current) {
      setInputPosition(inputRef.current.getBoundingClientRect());
    }
  };

  const cleanSuggestions = () => {
    setIsListOpen(false);
  };

  const handleClick = (options: T | T[]) => {
    onChange(options);
    setListTitle(getListTitle(options));
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

  const handleChangeInput = e => {
    onInputChange && onInputChange(e);
    const newValue = e.target.value;
    setListTitle(newValue);
    displayOptionsList();
  };

  const handleListBehavior = () => {
    setIsListOpen(!isListOpen);
  };

  const renderOptions = () => (
    <List<T>
      ref={listRef}
      size={size}
      options={filteredOptions}
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
      selected={selected}
      multiselect={multiselect}
      id={`${id}-list`}
    />
  );

  return (
    <div className={classnames(variablesClassName, styles['dropdown-container'])}>
      {editable ? (
        <Input
          ref={inputRef}
          id={id}
          size={size}
          placeholder={placeholder}
          disabled={disabled}
          label={label}
          value={listTitle}
          onChange={handleChangeInput}
          onFocus={() => setIsListOpen(hasSuggestions)}
          onMouseEnter={() => setIsInputHovered(true)}
          onMouseLeave={() => setIsInputHovered(false)}
          variablesClassName={classnames(styles['dropdown-input'], variablesClassName)}
          actionIcon={handleArrowIcon(isListOpen)}
          withActionIcon
          onClickActionIcon={handleListBehavior}
          prepend={handleIconCategory()}
          onStateChange={state => onStateChange(state)}
        />
      ) : (
        <Button
          label={listTitle}
          disabled={disabled}
          onClick={displayOptionsList}
          variablesClassName={classnames(styles['dropdown-button'], variablesClassName)}
          category='neutral'
          size={size}
          appendIcon={handleArrowIcon(isListOpen)}
          withAppendIcon
        />
      )}

      {isListOpen && renderOptions()}
    </div>
  );
};

Dropdown.defaultProps = {
  category: simpleCategory,
  size: largeSize,
  options: [],
  onChange: () => {},
  listItemCategory: simpleCategory,
  onStateChange: state => state
};

export default Dropdown;
