import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import classNames from 'classnames';

import styles from '@/components/Button/PrimaryButton/PrimaryButton.css';

interface Props {
  onClick: () => void;
}

const PrimaryButton: React.FC<Props> = props => (
  <DefaultButton {...props} className={classNames(styles.button, styles['button--primary'])} />
);

export default PrimaryButton;
