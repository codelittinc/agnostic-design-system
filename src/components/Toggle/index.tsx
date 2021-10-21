import React from 'react';
import Button from '@/components/Button';
import classNames from 'classnames';
import styles from './Toggle.css';

interface Props<T> {
  activeItem: T;
  items: Array<T>;
  variablesClassName?: string;

  getLabel: (item: T) => string;
  getValue: (item: T) => string;
  onChange: (value: T) => void;
}

const Toggle = <T extends {}>(props: Props<T>) => {
  const { items, activeItem, onChange, variablesClassName, getLabel, getValue } = props;

  return (
    <div data-testid='toggle-element' className={classNames(styles.toggle, variablesClassName)}>
      <div
        className={classNames(styles['toggle-active-btn'], variablesClassName)}
        data-active-item={getValue(activeItem) === getValue(items[0])}
      />
      {items.map(item => {
        return (
          <label
            key={getLabel(item)}
            htmlFor={getLabel(item)}
            data-active={activeItem === item}
            data-testid={`toggle-label-${getLabel(item)}`}
          >
            <Button
              size='medium'
              text={getLabel(item)}
              category='neutral'
              onClick={() => onChange(item)}
              data-testid={`toggle-element-${getLabel(item)}`}
            />
            <input
              readOnly
              id={getLabel(item)}
              type='radio'
              name='toggle'
              checked={activeItem === item}
              value={getValue(item)}
              data-testid={`toggle-input-${getLabel(item)}`}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Toggle;

Toggle.defaultProps = {
  items: [],
  activeItem: null
};
