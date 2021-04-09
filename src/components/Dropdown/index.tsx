import React from 'react';
import InputDropdown from './InputDropdown';
import ButtonDropdown from './ButtonDropdown';

export type Category = 'simple' | 'icon';
export type ListItemCategory = 'simple' | 'checkbox';
export type Size = 'large' | 'medium';

export const LARGE_SIZE = 'large';
export const SIMPLE_CATEGORY = 'simple';

export interface Props<T> {
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
  selectorText?: string;
  size: Size;
  variablesClassName?: string;
  filterOptions?: (options: T | T[]) => T | T[];
  onInputChange?: (e: any) => void;
  onStateChange: (state: boolean) => void;
  required?: boolean;
}

const Dropdown = <T extends {}>(props: Props<T>) => {
  const { editable } = props;

  return editable ? <InputDropdown<T> {...props} /> : <ButtonDropdown<T> {...props} />;
};

Dropdown.defaultProps = {
  category: SIMPLE_CATEGORY,
  size: LARGE_SIZE,
  options: [],
  onChange: () => {},
  listItemCategory: SIMPLE_CATEGORY,
  onStateChange: state => state,
  validations: []
};

export default Dropdown;
