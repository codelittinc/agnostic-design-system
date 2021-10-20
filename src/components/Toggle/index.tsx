import React from 'react';
import styles from '@/components/Toggle/Toggle.css';
import classnames from 'classnames';

interface Props {
  variablesClassName?: string;
}

const Toggle: React.FC<Props> = props => {
  return (
    <div className={styles['toggle-container']}>
      <button className={classnames(styles['toggle-first-button'], styles['active'])}>
        Tests
      </button>

      <button className={styles['toggle-second-button']}>
        Escalations
      </button>
    </div>
  );
};

export default Toggle;
