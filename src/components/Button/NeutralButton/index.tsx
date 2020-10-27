import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/NeutralButton/NeutralButton.css';

interface Props {
  disabled?: boolean;
  fixed?: boolean,
  label?: string;
  onClick: () => void;
}

const NeutralButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className={classNames(styles.button, styles['button--neutral'], styles['button--large'])}
    />
  );
};

export default NeutralButton;
