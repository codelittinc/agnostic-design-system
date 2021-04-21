import React from 'react';
import classNames from 'classnames';
import styles from './SelectItemsList.css';

interface Props<T> {
  getItem?: (item: T) => React.ReactNode;
  getItemKey: (item: T) => string;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string;
  id: string;
  onChange: (item?: T) => void;
  options: T[];
  selected?: T;
  variablesClassName?: string;
}

const getItems = (
  options,
  getItem,
  getItemKey,
  getItemValue,
  onChange,
  selected,
  variablesClassName
) =>
  options.map(option => {
    const currentKey = getItemKey(option);
    const isSelected = selected && getItemKey(selected) === currentKey;

    return (
      <>
        <input
          key={currentKey}
          id={currentKey}
          onChange={() => onChange(option)}
          type='radio'
          className={classNames(styles['input-container'])}
          checked={option === selected}
          value={getItemValue(option)}
        />
        <label
          className={classNames(
            styles['input-container-label'],
            isSelected && styles.selected,
            variablesClassName
          )}
          htmlFor={currentKey}
        >
          {getItem(option)}
        </label>
      </>
    );
  });

const SelectItemsList = <T extends {}>(props: Props<T>) => {
  const {
    onChange,
    selected,
    variablesClassName,
    getItem,
    getItemKey,
    getItemLabel,
    getItemValue,
    options
  } = props;

  const items = getItems(
    options,
    getItem || getItemLabel,
    getItemKey,
    getItemValue,
    onChange,
    selected,
    variablesClassName
  );

  return <div className={classNames(styles.container, variablesClassName)}>{items}</div>;
};

SelectItemsList.defaultProps = {
  onChange: () => null,
  getItemLabel: item => item.name
};

export default SelectItemsList;
