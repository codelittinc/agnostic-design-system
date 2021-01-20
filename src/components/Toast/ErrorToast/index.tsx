import React from 'react';
import DefaultToast from '@/components/Toast/DefaultToast';
import classNames from 'classnames';
import styles from '@/components/Toast/ErrorToast/ErrorToast.css';
import CloseIcon from '@/assets/images/icons/web/close.svg';

const ErrorToast = props => {
  return (
    <DefaultToast
      {...props}
      getIcon={() => (
        <CloseIcon className={classNames(styles['toast-error-icon'])} width={16} height={16} />
      )}
      className={classNames(styles.toast, styles['toast--error'])}
    />
  );
};

export default ErrorToast;
