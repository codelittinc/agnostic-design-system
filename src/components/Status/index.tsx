import React from 'react';
import classNames from 'classnames';
import styles from './Status.css';

type StatusProps = {
  icon?: React.ReactNode;
  leftIcon?: boolean;
  text: string | React.ReactNode;
  variablesClassName?: string;
};

const Status: React.FC<StatusProps> = ({ icon, leftIcon, text, variablesClassName }) => {
  return (
    <div
      className={classNames(
        styles['status-wrapper'],
        leftIcon && styles['status-wrapper-left-icon'],
        variablesClassName
      )}
    >
      <div className={styles['status-text']}>{text}</div>
      <div
        className={classNames(
          styles['status-icon-container'],
          leftIcon && styles['status-icon-container-left'],
          variablesClassName
        )}
      >
        {icon}
      </div>
    </div>
  );
};

export default Status;
