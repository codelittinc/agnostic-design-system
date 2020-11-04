import React from 'react';
import styles from '../Grid.css';

interface PropTypes {
  children?: React.ReactNode;
}

const Container: React.FC<PropTypes> = (props: PropTypes) => {
  const { children, ...attributes } = props;

  return (
    <div {...attributes} className={styles['codelitt-container']}>
      {children}
    </div>
  );
};

export default Container;
