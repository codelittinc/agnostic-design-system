import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import styles from '@/components/Dropdown/Dropdown.css';
import Button, { Position } from '@/components/Button';
import getArrowIcon from '@/components/Dropdown/getArrowIcon';
import { Category, ListItemCategory, ListPosition, Size } from '@/components/Dropdown';
import RenderOptions from '../renderOptions';
import { isEmpty } from 'lodash';
import { ControlledInputProps } from '@/components/Input';

type Props<T> = {
  category: Category;
  customIcon?: React.ReactNode;
  disabled?: boolean;
  editable?: boolean;
  getListTitle: (selected: T | T[]) => string;
  getItemKey: (item: T) => string | number;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string | number | string[];
  groupBy?: ((item: T) => any) | string;
  iconPosition?: Position;
  id: string;
  listItemCategory: ListItemCategory;
  multiselect?: boolean;
  nodeAfterItems?: React.ReactNode;
  nodeBeforeItems?: React.ReactNode;
  onValidate: (item?: T | T[]) => void;
  options: T[];
  selectorText?: string;
  size: Size;
  sort?: (a: T, b: T) => number;
  variablesClassName?: string;
  messageValidateClass: string;
  validationMessage?: string;
  listPosition: ListPosition;
} & ControlledInputProps<T | T[]>;

const ButtonDropdown = <T extends {}>(props: Props<T>) => {
  const {
    value,
    customIcon,
    disabled,
    iconPosition,
    size,
    getListTitle,
    onChange,
    onValidate,
    listPosition,
    multiselect,
    selectorText,
    variablesClassName,
    messageValidateClass,
    validationMessage
  } = props;

  const [listTitle, setListTitle] = useState(value ? getListTitle(value) : selectorText || '');
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

  useEffect(() => {
    setListTitle(
      Array.isArray(value) && value.length > 0
        ? getListTitle(value)
        : !multiselect && !isEmpty(value)
        ? getListTitle(value as T)
        : selectorText || ''
    );
  }, [getListTitle, multiselect, selectorText, value]);

  const handleClick = (options: T | T[]) => {
    onChange(options);
    onValidate(options);
    setIsListOpen(!!multiselect);
  };

  return (
    <>
      <div className={classnames(variablesClassName, styles['dropdown-container'])}>
        <Button
          text={listTitle}
          disabled={disabled}
          onClick={displayOptionsList}
          variablesClassName={classnames(styles['dropdown-button'], variablesClassName)}
          category='neutral'
          size={size}
          iconPosition={iconPosition}
          appendIcon={customIcon || getArrowIcon(isListOpen, listPosition, size)}
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
            // Todo: verify why this is not provided
            onValidationChange={() => {}}
          />
        )}
      </div>
      <span className={classnames(styles['dropdown--message'], styles[messageValidateClass])}>
        {validationMessage}
      </span>
    </>
  );
};

export default ButtonDropdown;
