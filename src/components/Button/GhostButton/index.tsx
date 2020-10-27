import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/GhostButton/GhostButton.css';

interface Props {
  onClick: () => void;
  size: string,
}

const GhostButton: React.FC<Props> = props => {
  const { size, ...buttonProps } = props;
  const sizeClass = `button--${size}`;

  return (
    <DefaultButton
      {...buttonProps}
      className={classNames(styles.button, styles['button--ghost'], styles[sizeClass])}
    />
  );
};

export default GhostButton;
