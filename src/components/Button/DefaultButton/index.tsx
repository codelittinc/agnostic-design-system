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
  onClick?: () => void;
  size?: string;
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
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
    appendIcon,
    className,
    content,
    fixed,
    onClick,
    size,
    text,
    type,
    variablesClassName,
    withAppendIcon,
    ...buttonProps
  } = props;

  const sizeClass = `button--${size}`;

  const buttonContent = content || getButtonContent(text, withAppendIcon, appendIcon, size);
  return (
    <button
      {...buttonProps}
      onClick={onClick}
      type={type || 'button'}
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
