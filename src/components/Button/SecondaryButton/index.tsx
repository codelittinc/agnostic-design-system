import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/SecondaryButton/SecondaryButton.css';

interface Props {
  onClick: () => void,
}

const SecondaryButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className={classNames(styles.button, styles['button--secondary'])}
    />
  );
};

export default SecondaryButton;
