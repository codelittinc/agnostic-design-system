import React from 'react';
import styles from '../Grid.css';
import classNames from 'classnames';

interface PropTypes {
  children?: React.ReactNode;
  variablesClassName?: string;
}

const Row: React.FC<PropTypes> = props => {
  const { children, variablesClassName, ...attributes } = props;

  return (
    <div {...attributes} className={classNames(styles['codelitt-row'], variablesClassName)}>
      {children}
    </div>
  );
};

export default Row;
