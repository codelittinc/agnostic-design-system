import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/PositiveButton/PositiveButton.css';

interface Props {
  disabled?: boolean;
  fixed?: boolean,
  label?: string;
  onClick: () => void;
}

const PositiveButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className={classNames(styles.button, styles['button--positive'], styles['button--large'])}
    />
  );
};

export default PositiveButton;
