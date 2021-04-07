import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/NeutralButton/NeutralButton.css';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
}

const NeutralButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <DefaultButton
    {...props}
    className={classNames(styles.button, styles['button--neutral'])}
    ref={ref}
  />
));

export default NeutralButton;
