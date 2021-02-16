import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/PositiveButton/PositiveButton.css';

interface Props {
  onClick: () => void;
}

const PositiveButton: React.FC<Props> = props => (
  <DefaultButton {...props} variablesClassName={styles['button--positive']} />
);

export default PositiveButton;
