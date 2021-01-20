import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from '@/components/Toast/DefaultToast/DefaultToast.css';
import IconClose from '@/assets/images/icons/web/close.svg';

export interface Props {
  autoCloseInMilliseconds?: number;
  className?: string;
  getBody?: () => React.ReactNode;
  getCloseButton?: () => React.ReactNode;
  getIcon?: () => React.ReactNode;
  message?: string;
  onClose: () => void;
  size?: string;
  title?: string;
  variablesClassName?: string;
}

const DefaultToast: React.FC<Props> = props => {
  const {
    className,
    autoCloseInMilliseconds,
    title,
    message,
    onClose,
    size,
    getIcon,
    getCloseButton,
    getBody,
    variablesClassName,
    ...toastProps
  } = props;

  const sizeClass = `toast--${size}`;
  const sizeMessageClass = `toast-body-message--${size}`;
  const sizeTitleClass = `toast-body-title--${size}`;
  const sizeIcon = 10;
  const [hideMessage, setHideMessage] = useState(false);

  const handleCloseClick = () => {
    setHideMessage(true);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (autoCloseInMilliseconds) {
      setTimeout(() => {
        setHideMessage(true);
      }, autoCloseInMilliseconds);
    }
  }, []);

  return (
    <div
      {...toastProps}
      className={classNames(
        className,
        sizeClass,
        variablesClassName,
        styles.toast,
        styles[sizeClass],
        hideMessage ? styles['toast-hidden'] : ''
      )}
    >
      {getIcon ? getIcon() : ''}
      {getBody ? (
        getBody()
      ) : (
        <div className={styles['toast-body']}>
          {title && (
            <p className={classNames(styles['toast-body-title'], styles[sizeTitleClass])}>
              {title}
            </p>
          )}
          {message && (
            <span className={classNames(styles['toast-body-message'], styles[sizeMessageClass])}>
              {message}
            </span>
          )}
        </div>
      )}
      {getCloseButton ? (
        getCloseButton()
      ) : (
        <button onClick={handleCloseClick} className={classNames(styles['toast-button'])}>
          <IconClose
            className={classNames(styles['toast-button-icon'])}
            height={sizeIcon}
            width={sizeIcon}
            title='Close alert'
          />
        </button>
      )}
    </div>
  );
};

DefaultToast.defaultProps = {
  size: 'large'
};

export default DefaultToast;
