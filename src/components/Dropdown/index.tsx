import React, { useState } from 'react';
import InputDropdown from './InputDropdown';
import ButtonDropdown from './ButtonDropdown';
import { isEmpty } from 'lodash';
import { Position } from '@/components/Button';
import { ControlledInputProps } from '../Input';

export type Category = 'simple' | 'icon';
export type ListItemCategory = 'simple' | 'checkbox';
export type Size = 'large' | 'medium';
export type ListPosition = 'bottom' | 'top';

export const LARGE_SIZE = 'large';
export const SIMPLE_CATEGORY = 'simple';

const VALID = 'valid';
const INVALID = 'invalid';

export type Props<T> = {
  category: Category;
  collapsibleGroups?: boolean;
  collapsibleGroupsButtonItems?: React.ReactNode[];
  customIcon?: React.ReactNode;
  disabled?: boolean;
  disabledOptionsList?: string[];
  editable?: boolean;
  filterOptions?: (options: T | T[]) => T | T[];
  getListTitle: (selected: T | T[]) => string;
  getItemKey: (item: T) => string | number;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string | number | string[];
  groupBy?: ((item: T) => any) | string;
  hideGroupByTitle?: boolean;
  iconPosition?: Position;
  id: string;
  label?: string;
  listItemCategory: ListItemCategory;
  listPosition: ListPosition;
  multiselect?: boolean;
  nodeAfterItems?: React.ReactNode;
  nodeBeforeItems?: React.ReactNode;
  onInputChange?: (e: any) => void;
  options: T[];
  required?: boolean;
  selectorText?: string;
  showSelectAll?: boolean;
  size: Size;
  sort?: (a: T, b: T) => number;
  variablesClassName?: string;
  withAppendIcon?: boolean;
} & ControlledInputProps<T | T[]>;

const Dropdown = <T extends {}>(props: Props<T>) => {
  const { editable, required, onValidationChange } = props;

  const [validationState, setValidationState] = useState('');
  const hasValidationState = validationState !== '';
  const messageValidateClass = hasValidationState ? `dropdown--message-${validationState}` : '';
  const requiredMessage = 'This field is required.';

  const handleValidation = (item?: T | T[]) => {
    const valid = !required || !isEmpty(item);
    onValidationChange && onValidationChange(valid);
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
  onValidationChange: state => state,
  validations: []
};

export default Dropdown;
