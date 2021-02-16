import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/NegativeButton/NegativeButton.css';

interface Props {
  onClick: () => void;
}

const NegativeButton: React.FC<Props> = props => (
  <DefaultButton {...props} variablesClassName={styles['button--negative']} />
);

export default NegativeButton;
