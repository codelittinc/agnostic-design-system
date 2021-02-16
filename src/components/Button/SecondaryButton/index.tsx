import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/SecondaryButton/SecondaryButton.css';

interface Props {
  onClick: () => void;
}

const SecondaryButton: React.FC<Props> = props => (
  <DefaultButton {...props} variablesClassName={styles['button--secondary']} />
);

export default SecondaryButton;
