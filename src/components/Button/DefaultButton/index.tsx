import React from 'react';
import classNames from 'classnames';
import styles from '@/components/Button/DefaultButton/DefaultButton.css';
import DefaultAppendIcon from '@/assets/images/icons/web/append-button-icon.svg';

interface Props {
  appendIcon?: React.ReactNode;
  className: string;
  content?: React.ReactNode;
  disabled?: boolean;
  fixed?: boolean;
  text?: string;
  onClick?: () => void;
  size?: string;
  variablesClassName?: string;
  withAppendIcon?: boolean;
}

const getAppendIcon = (appendIcon, size) => {
  const largeIcon = size === 'large';
  const sizeWidthIcon = largeIcon ? 8 : 6;
  const sizeHeightIcon = largeIcon ? 14 : 10;

  return appendIcon ? (
    <>{appendIcon}</>
  ) : (
    <DefaultAppendIcon
      className={classNames(styles['button--append-icon'])}
      height={sizeHeightIcon}
      width={sizeWidthIcon}
    />
  );
};

const getButtonContent = (text, withAppendIcon, appendIcon, size) => {
  return (
    <>
      {text ? <span className={classNames(styles['button--text'])}>{text}</span> : ''}

      {withAppendIcon && (
        <div className={classNames(styles['button--append-icon-container'])}>
          {getAppendIcon(appendIcon, size)}
        </div>
      )}
    </>
  );
};

const DefaultButton: React.FC<Props> = props => {
  const {
    className,
    fixed,
    text,
    onClick,
    size,
    variablesClassName,
    appendIcon,
    withAppendIcon,
    content,
    ...buttonProps
  } = props;

  const sizeClass = `button--${size}`;

  const buttonContent = content || getButtonContent(text, withAppendIcon, appendIcon, size);
  return (
    <button
      {...buttonProps}
      onClick={onClick}
      type='button'
      className={classNames(
        className,
        styles.button,
        styles[sizeClass],
        {
          [styles['button--fixed']]: fixed
        },
        variablesClassName
      )}
    >
      {buttonContent}
    </button>
  );
};

DefaultButton.defaultProps = {
  disabled: false,
  fixed: false,
  size: 'large'
};

export default DefaultButton;
