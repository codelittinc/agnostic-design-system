import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/GhostButton/GhostButton.css';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
}

const GhostButton: React.FC<Props> = props => (
  <DefaultButton {...props} className={classNames(styles.button, styles['button--ghost'])} />
);

export default GhostButton;
