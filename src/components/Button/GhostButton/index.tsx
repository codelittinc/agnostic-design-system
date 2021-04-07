import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/GhostButton/GhostButton.css';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
}

const GhostButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <DefaultButton
    {...props}
    className={classNames(styles.button, styles['button--ghost'])}
    ref={ref}
  />
));

export default GhostButton;
