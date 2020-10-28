import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/GhostButton/GhostButton.css';

interface Props {
  onClick: () => void;
}

const GhostButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className={classNames(styles.button, styles['button--ghost'])}
    />
  );
};

export default GhostButton;
