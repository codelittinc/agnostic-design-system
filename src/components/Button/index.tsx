import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.sass';

const DEFAULT_ICON_POSITION = 'left';

interface Props {
  text?: string;
  icon?: any;
  iconPosition?: 'left' | 'right' | 'full-left' | 'full-right';
  wrapperClassName?: string;
  onClick: () => void;
  disabled?: boolean;
  big?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<Props> = props => {
  let content: JSX.Element | JSX.Element[];

  const Icon = () => <img src={props.icon} alt='' />;

  if (props.text && !props.icon) {
    content = <span>{props.text}</span>;
  } else if (props.icon && !props.text) {
    content = <Icon />;
  } else {
    content = [<Icon key={1} />, <span key={2}>{props.text}</span>];
  }

  const classes = [
    styles.button,
    {
      [styles.big]: props.big,
      [styles['full-width']]: props.fullWidth,
      [styles[`icon-${props.iconPosition || DEFAULT_ICON_POSITION}`]]: props.text && props.icon,
    },
  ];

  return (
    <button
      type='button'
      onClick={props.onClick}
      title={props.text || undefined}
      disabled={props.disabled}
      className={classNames(classes, props.wrapperClassName)}
    >
      {content}
    </button>
  );
};

export default Button;
