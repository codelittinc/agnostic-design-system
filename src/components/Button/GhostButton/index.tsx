import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/GhostButton/GhostButton.css';

interface Props {
  onClick: () => void;
}

const GhostButton: React.FC<Props> = props => (
  <DefaultButton {...props} variablesClassName={styles['button--ghost']} />
);

export default GhostButton;
