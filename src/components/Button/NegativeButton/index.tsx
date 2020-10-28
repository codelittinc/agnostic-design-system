import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/NegativeButton/NegativeButton.css';

interface Props {
  onClick: () => void,
}

const NegativeButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className={classNames(styles.button, styles['button--negative'])}
    />
  );
};

export default NegativeButton;
