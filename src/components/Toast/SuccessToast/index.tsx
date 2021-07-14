import React from 'react';
import DefaultToast from '@/components/Toast/DefaultToast';
import classNames from 'classnames';
import styles from '@/components/Toast/SuccessToast/SuccessToast.css';
import CheckMarkIcon from '@/assets/images/icons/web/checkmark.svg';

const SuccessToast = props => {
  return (
    <DefaultToast
      getIcon={() => (
        <CheckMarkIcon
          className={classNames(styles['toast-success-icon'])}
          width={27}
          height={18}
        />
      )}
      {...props}
      className={classNames(styles.toast, styles['toast--success'])}
    />
  );
};

export default SuccessToast;
