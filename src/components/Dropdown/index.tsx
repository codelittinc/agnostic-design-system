import React, { useState } from 'react';
import InputDropdown from './InputDropdown';
import ButtonDropdown from './ButtonDropdown';
import { isEmpty } from 'lodash';
import { Position } from '@/components/Button'; // eslint-disable-line no-unused-vars

export type Category = 'simple' | 'icon';
export type ListItemCategory = 'simple' | 'checkbox';
export type Size = 'large' | 'medium';
export type ListPosition = 'bottom' | 'top';

export const LARGE_SIZE = 'large';
export const SIMPLE_CATEGORY = 'simple';

const VALID = 'valid';
const INVALID = 'invalid';

export interface Props<T> {
  category: Category;
  customIcon?: React.ReactNode;
  disabled?: boolean;
  editable?: boolean;
  filterOptions?: (options: T | T[]) => T | T[];
  getListTitle: (selected: T | T[]) => string;
  getItemKey: (item: T) => string | number;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string | number | string[];
  groupBy?: ((item: T) => any) | string;
  iconPosition?: Position;
  id: string;
  label?: string;
  listItemCategory: ListItemCategory;
  listPosition: ListPosition;
  multiselect?: boolean;
  nodeAfterItems?: React.ReactNode;
  nodeBeforeItems?: React.ReactNode;
  onChange: (item?: T | T[]) => void;
  onInputChange?: (e: any) => void;
  onStateChange: (state: boolean) => void;
  options: T[];
  required?: boolean;
  selected?: T[] | T;
  selectorText?: string;
  showSelectAll?: boolean;
  size: Size;
  sort?: (a: T, b: T) => number;
  variablesClassName?: string;
}

const Dropdown = <T extends {}>(props: Props<T>) => {
  const { editable, required, onStateChange } = props;

  const [validationState, setValidationState] = useState('');
  const hasValidationState = validationState !== '';
  const messageValidateClass = hasValidationState ? `dropdown--message-${validationState}` : '';
  const requiredMessage = 'This field is required.';

  const handleValidation = (item?: T | T[]) => {
    const valid = !required || !isEmpty(item);
    onStateChange(valid);
    setValidationState(valid ? VALID : INVALID);
  };

  const getMessage = () => {
    return validationState === INVALID ? requiredMessage : '';
  };

  const childrenProps = {
    messageValidateClass,
    validationMessage: getMessage(),
    onValidate: handleValidation,
    ...props
  };

  return editable ? (
    <InputDropdown<T> {...childrenProps} />
  ) : (
    <ButtonDropdown<T> {...childrenProps} />
  );
};

Dropdown.defaultProps = {
  category: SIMPLE_CATEGORY,
  size: LARGE_SIZE,
  options: [],
  onChange: () => {},
  listItemCategory: SIMPLE_CATEGORY,
  listPosition: 'bottom',
  onStateChange: state => state,
  validations: []
};

export default Dropdown;
