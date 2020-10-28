import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/PositiveButton/PositiveButton.css';

interface Props {
  onClick: () => void,
}

const PositiveButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className={classNames(styles.button, styles['button--positive'])}
    />
  );
};

export default PositiveButton;
