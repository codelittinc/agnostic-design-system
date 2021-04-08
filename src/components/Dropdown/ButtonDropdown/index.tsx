import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import styles from '@/components/Dropdown/Dropdown.css';
import Button from '@/components/Button';
import getArrowIcon from '@/components/Dropdown/getArrowIcon';
import { Category, ListItemCategory, Size } from '@/components/Dropdown'; // eslint-disable-line no-unused-vars
import RenderOptions from '../renderOptions';

interface Props<T> {
  category: Category;
  disabled?: boolean;
  editable?: boolean;
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
  options: T[];
  selected?: T[] | T;
  size: Size;
  variablesClassName?: string;
}

const ButtonDropdown = <T extends {}>(props: Props<T>) => {
  const {
    selected,
    label,
    disabled,
    size,
    getListTitle,
    onChange,
    multiselect,
    variablesClassName
  } = props;

  const [listTitle, setListTitle] = useState(selected ? getListTitle(selected) : label || '');
  const [isListOpen, setIsListOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
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
  }, [buttonRef, isListOpen]);

  const displayOptionsList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleClick = (options: T | T[]) => {
    onChange(options);
    setListTitle(
      Array.isArray(options) && options.length > 0
        ? getListTitle(options)
        : !multiselect && options
        ? getListTitle(options)
        : label || ''
    );
    setIsListOpen(!!multiselect);
  };

  return (
    <div className={classnames(variablesClassName, styles['dropdown-container'])}>
      <Button
        text={listTitle}
        disabled={disabled}
        onClick={displayOptionsList}
        variablesClassName={classnames(styles['dropdown-button'], variablesClassName)}
        category='neutral'
        size={size}
        appendIcon={getArrowIcon(isListOpen, size)}
        withAppendIcon
        ref={buttonRef}
      />
      {isListOpen && (
        <RenderOptions<T>
          {...props}
          ref={listRef}
          onChange={item => {
            item && handleClick(item);
          }}
        />
      )}
    </div>
  );
};

export default ButtonDropdown;
