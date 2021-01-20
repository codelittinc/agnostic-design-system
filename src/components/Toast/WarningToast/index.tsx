import React from 'react';
import DefaultToast from '@/components/Toast/DefaultToast';
import classNames from 'classnames';
import styles from '@/components/Toast/WarningToast/WarningToast.css';
import WarningIcon from '@/assets/images/icons/web/warning.svg';

const WarningToast = props => {
  return (
    <DefaultToast
      {...props}
      getIcon={() => (
        <WarningIcon className={classNames(styles['toast-warning-icon'])} width={25} height={25} />
      )}
      className={classNames(styles.toast, styles['toast--warning'])}
    />
  );
};

export default WarningToast;
