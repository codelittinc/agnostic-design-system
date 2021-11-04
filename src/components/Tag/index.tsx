import React from 'react';
import styles from './Tag.css';
import classNames from 'classnames';

type TagProps = {
  children: React.ReactNode;
  variablesClassName?: string;
};

const Tag: React.FC<TagProps> = (props: TagProps) => {
  const { children, variablesClassName } = props;

  return <div className={classNames(styles['tag-container'], variablesClassName)}>{children}</div>;
};

export default Tag;
