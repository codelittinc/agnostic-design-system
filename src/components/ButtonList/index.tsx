import React from 'react';
import classNames from 'classnames';
import styles from './ButtonList.css';
import Button, { Category } from '../Button'; // eslint-disable-line no-unused-vars

interface Props<T> {
  category: Category;
  getItem?: (item: T) => React.ReactNode;
  getItemKey: (item: T) => string;
  getItemLabel: (item: T) => string;
  id: string;
  onChange: (item?: T) => void;
  options: T[];
  selected?: T;
  variablesClassName?: string;
}

const getItems = (
  options,
  category,
  getItem,
  getItemKey,
  onClick,
  selected,
  variablesClassName,
  custom
) =>
  options.map(option => {
    const currentKey = getItemKey(option);
    const isSelected = selected && getItemKey(selected) === currentKey;

    return (
      <Button
        key={currentKey}
        onClick={() => onClick(option)}
        variablesClassName={classNames({ [styles.selected]: isSelected }, variablesClassName)}
        content={custom && getItem(option)}
        text={getItem(option)}
        category={category}
      />
    );
  });

const ButtonList = <T extends {}>(props: Props<T>) => {
  const {
    onChange,
    category,
    selected,
    variablesClassName,
    getItem,
    getItemKey,
    getItemLabel,
    options
  } = props;

  const items = getItems(
    options,
    category,
    getItem || getItemLabel,
    getItemKey,
    onChange,
    selected,
    variablesClassName,
    !!getItem
  );

  return <div className={classNames(styles.container, variablesClassName)}>{items}</div>;
};

ButtonList.defaultProps = {
  onChange: () => null,
  getItemLabel: item => item.name,
  category: 'neutral'
};

export default ButtonList;
