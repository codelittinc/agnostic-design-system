import React from 'react';
import DefaultEmptyStateImage from '@/assets/images/empty-state-image.svg';
import styles from './EmptyState.css';
import classNames from 'classnames';

type EmptyStateProps = {
  description: string | React.ReactNode;
  image?: React.ReactNode;
  title: string | React.ReactNode;
  variablesClassName?: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({
  description,
  image,
  title,
  variablesClassName
}) => {
  return (
    <div className={classNames(styles['empty-state-container'], variablesClassName)}>
      <div className={styles['empty-state-image-container']}>
        {image || <DefaultEmptyStateImage height='100%' width='100%' />}
      </div>
      <h4 className={styles['empty-state-title']}>{title}</h4>
      <p className={styles['empty-state-description']}>{description}</p>
    </div>
  );
};

export default EmptyState;
