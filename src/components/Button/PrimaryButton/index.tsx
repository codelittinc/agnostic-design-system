import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/PrimaryButton/PrimaryButton.css';

interface Props {
  disabled?: boolean;
  fixed?: boolean,
  label?: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className={classNames(styles.button, styles['button--primary'], styles['button--large'])}
    />
  );
};

export default PrimaryButton;