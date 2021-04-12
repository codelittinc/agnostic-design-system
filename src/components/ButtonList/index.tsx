import React from 'react';
import classNames from 'classnames';
import styles from './ButtonList.css';
import Button from '../Button';

interface Props<T> {
  id: string;
  getItem: (item: T, selected: T) => React.ReactNode;
  getItemKey: (item: T) => string;
  onChange: (item?: T) => void;
  options: T[];
  selected?: T;
  variablesClassName?: string;
}

const getDefaultItem = item => <span>{item.name}</span>;

const getItems = (options, getItem, getItemKey, onClick, selected, variablesClassName) =>
  options.map(option => {
    const currentKey = getItemKey(option);
    const isSelected = selected && getItemKey(selected) === currentKey;

    return (
      <Button
        key={currentKey}
        onClick={() => onClick(option)}
        variablesClassName={classNames({ [styles.selected]: isSelected }, variablesClassName)}
        content={getItem(option, selected)}
      />
    );
  });

const ButtonList = <T extends {}>(props: Props<T>) => {
  const { onChange, selected, variablesClassName, getItem, getItemKey, options } = props;

  const items = getItems(
    options,
    getItem || getDefaultItem,
    getItemKey,
    onChange,
    selected,
    variablesClassName
  );

  return <div className={classNames(styles.container, variablesClassName)}>{items}</div>;
};

ButtonList.defaultProps = {
  onChange: () => null
};

export default ButtonList;
