import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/PrimaryButton/PrimaryButton.css';

interface Props {
  onClick: () => void,
  size: string,
}

const PrimaryButton: React.FC<Props> = props => {
  const { size, ...buttonProps } = props;
  const sizeClass = `button--${size}`;

  return (
    <DefaultButton
      {...buttonProps}
      className={classNames(styles.button, styles['button--primary'], styles[sizeClass])}
    />
  );
};

export default PrimaryButton;
