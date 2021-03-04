import React from 'react';
import classNames from 'classnames';
import styles from '@/components/Button/DefaultButton/DefaultButton.css';
import DefaultAppendIcon from '@/assets/images/icons/web/append-button-icon.svg';

interface Props {
  className: string;
  disabled?: boolean;
  fixed?: boolean;
  label?: string;
  onClick: () => void;
  size?: string;
  variablesClassName?: string;
  appendIcon?: React.ReactNode;
  withAppendIcon?: boolean;
}

const DefaultButton: React.FC<Props> = props => {
  const {
    className,
    fixed,
    label,
    onClick,
    size,
    variablesClassName,
    appendIcon,
    withAppendIcon,
    ...buttonProps
  } = props;

  const sizeClass = `button--${size}`;

  const largeIcon = props.size === 'large';
  const sizeWidthIcon = largeIcon ? 8 : 6;
  const sizeHeightIcon = largeIcon ? 14 : 10;

  const getAppendIcon = appendIcon => {
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
      {label ? <span className={classNames(styles['button--label'])}>{label}</span> : ''}

      {withAppendIcon && (
        <div className={classNames(styles['button--append-icon-container'])}>
          {getAppendIcon(appendIcon)}
        </div>
      )}
    </button>
  );
};

DefaultButton.defaultProps = {
  disabled: false,
  fixed: false,
  size: 'large'
};

export default DefaultButton;
