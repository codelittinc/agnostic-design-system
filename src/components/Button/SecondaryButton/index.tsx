import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/SecondaryButton/SecondaryButton.css';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
}

const SecondaryButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <DefaultButton
    {...props}
    className={classNames(styles.button, styles['button--secondary'])}
    ref={ref}
  />
));

export default SecondaryButton;
