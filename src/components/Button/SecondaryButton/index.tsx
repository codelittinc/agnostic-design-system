import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/SecondaryButton/SecondaryButton.css';

interface Props {
  disabled?: boolean;
  fixed?: boolean,
  label?: string;
  onClick: () => void;
}

const SecondaryButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className={classNames(styles.button, styles['button--secondary'], styles['button--large'])}
    />
  );
};

export default SecondaryButton;