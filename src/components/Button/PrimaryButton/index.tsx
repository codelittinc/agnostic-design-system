import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/PrimaryButton/PrimaryButton.css';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <DefaultButton
    {...props}
    className={classNames(styles.button, styles['button--primary'])}
    ref={ref}
  />
));

export default PrimaryButton;
