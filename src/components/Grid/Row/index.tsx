import React from 'react';
import styles from '../Grid.css';

interface PropTypes {
  children?: React.ReactNode;
}

const Row: React.FC<PropTypes> = (props: PropTypes) => {
  const { children, ...attributes } = props;

  return (
    <div {...attributes} className={styles['codelitt-row']}>
      {children}
    </div>
  );
};

export default Row;
