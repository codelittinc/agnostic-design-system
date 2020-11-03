import React from 'react';
import classNames from 'classnames';
import styles from '../Grid.css';


interface PropTypes {
  /**
   * You can pass a custom class to the `<Row>` element
   */
  wrapperClassName?: string;

  children?: React.ReactNode;
}

const Row: React.FC<PropTypes> = (props: PropTypes) => {
  const { wrapperClassName, children, ...attributes } = props;

  return (
    <div {...attributes} className={classNames(styles['codelitt-row'], wrapperClassName)}>
      {children}
    </div>
  );
};

export default Row;
