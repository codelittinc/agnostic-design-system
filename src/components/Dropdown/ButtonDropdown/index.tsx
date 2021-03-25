import React, { useState } from 'react';
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
  const { selected, label, disabled, size, getListTitle, onChange, variablesClassName } = props;

  const [listTitle, setListTitle] = useState(selected ? getListTitle(selected) : label || '');
  const [isListOpen, setIsListOpen] = useState(false);

  const displayOptionsList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleClick = (options: T | T[]) => {
    onChange(options);
    setListTitle(getListTitle(options));
    displayOptionsList();
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
      />
      {isListOpen && (
        <RenderOptions<T>
          {...props}
          onChange={item => {
            item && handleClick(item);
          }}
        />
      )}
    </div>
  );
};

export default ButtonDropdown;
