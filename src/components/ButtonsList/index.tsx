import React from 'react';
import classNames from 'classnames';
import styles from './ButtonsList.css';
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

const getItems = (options, getItem, getItemKey, onClick, selected) =>
  options.map(option => {
    const currentKey = getItemKey(option);
    const isSelected = selected && getItemKey(selected) === currentKey;

    return (
      <Button
        key={currentKey}
        onClick={() => onClick(option)}
        variablesClassName={classNames(styles.button, { [styles.selected]: isSelected })}
        content={getItem(option, selected)}
      />
    );
  });

const ButtonsList = <T extends {}>(props: Props<T>) => {
  const { onChange, selected, variablesClassName, getItem, getItemKey, options } = props;

  const items = getItems(options, getItem || getDefaultItem, getItemKey, onChange, selected);

  return <div className={classNames(variablesClassName, styles.container)}>{items}</div>;
};

ButtonsList.defaultProps = {
  onChange: () => null
};

export default ButtonsList;
