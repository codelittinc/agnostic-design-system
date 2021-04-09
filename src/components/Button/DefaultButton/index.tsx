import React from 'react';
import classNames from 'classnames';
import styles from '@/components/Button/DefaultButton/DefaultButton.css';
import DefaultAppendIcon from '@/assets/images/icons/web/append-button-icon.svg';
import { Position, Size } from '@/components/Button'; // eslint-disable-line no-unused-vars

interface Props {
  appendIcon?: React.ReactNode;
  className: string;
  content?: React.ReactNode;
  disabled?: boolean;
  fixed?: boolean;
  iconPosition?: Position;
  onClick?: () => void;
  size?: Size;
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

const getButtonContent = (text, withAppendIcon, appendIcon, size, iconPosition) => {
  const iconPositionClass = `append-icon-${iconPosition}`;

  const getIconContainer = () => {
    return (
      <div className={classNames(styles[iconPositionClass])}>{getAppendIcon(appendIcon, size)}</div>
    );
  };

  return (
    <>
      {iconPosition === 'left' && withAppendIcon && getIconContainer()}
      {text ? <span className={classNames(styles['button--text'])}>{text}</span> : ''}
      {iconPosition === 'right' && withAppendIcon && getIconContainer()}
    </>
  );
};

const DefaultButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    appendIcon,
    className,
    content,
    disabled,
    fixed,
    onClick,
    size,
    text,
    type,
    variablesClassName,
    withAppendIcon,
    iconPosition,
    ...buttonProps
  } = props;

  const sizeClass = `button--${size}`;

  const buttonContent =
    content || getButtonContent(text, withAppendIcon, appendIcon, size, iconPosition);
  return (
    <button
      {...buttonProps}
      disabled={disabled}
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
      ref={ref}
    >
      {buttonContent}
    </button>
  );
});

DefaultButton.defaultProps = {
  disabled: false,
  fixed: false,
  size: 'large',
  iconPosition: 'right'
};

export default DefaultButton;
