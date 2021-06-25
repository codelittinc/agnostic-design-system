import React from 'react';
import classNames from 'classnames';
import styles from './SelectItemsList.css';

interface Props<T> {
  getItem?: (item: T) => React.ReactNode;
  getItemKey: (item: T) => string;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string;
  id: string;
  label?: string | React.ReactNode;
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
      <div key={currentKey}>
        <input
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
      </div>
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
    label,
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

  const getLabel = () => {
    return React.isValidElement(label)
      ? label
      : label && <label className={classNames(styles['select-items-list--label'])}>{label}</label>;
  };

  return (
    <>
      {getLabel()}
      <div className={classNames(styles.container, variablesClassName)}>{items}</div>
    </>
  );
};

SelectItemsList.defaultProps = {
  onChange: () => null,
  getItemLabel: item => item.name
};

export default SelectItemsList;
