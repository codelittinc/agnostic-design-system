import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/NeutralButton/NeutralButton.css';

interface Props {
  onClick: () => void;
}

const NeutralButton: React.FC<Props> = props => (
  <DefaultButton {...props} variablesClassName={styles['button--neutral']} />
);

export default NeutralButton;
