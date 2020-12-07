import React from 'react';
import styles from '../Grid.css';
import classNames from 'classnames';

interface PropTypes {
  children?: React.ReactNode;
  variablesClassName?: string;
}

const Container: React.FC<PropTypes> = props => {
  const { children, variablesClassName, ...attributes } = props;

  return (
    <div {...attributes} className={classNames(variablesClassName, styles['codelitt-container'])}>
      {children}
    </div>
  );
};

export default Container;
