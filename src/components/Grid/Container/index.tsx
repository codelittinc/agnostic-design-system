import React from 'react';
import styles from '../Grid.css';
import classNames from 'classnames';

interface PropTypes {
  children?: React.ReactNode;
  variablesClassName?: string;
  fluid?: boolean;
}

const Container: React.FC<PropTypes> = props => {
  const { children, variablesClassName, fluid, ...attributes } = props;

  const containerClassName = fluid ? 'codelitt-container-fluid' : 'codelitt-container';

  return (
    <div {...attributes} className={classNames(variablesClassName, styles[containerClassName])}>
      {children}
    </div>
  );
};

export default Container;
