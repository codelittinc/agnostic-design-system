import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/PositiveButton/PositiveButton.css';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
}

const PositiveButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <DefaultButton
    {...props}
    className={classNames(styles.button, styles['button--positive'])}
    ref={ref}
  />
));

export default PositiveButton;
