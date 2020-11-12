import React from 'react';
import DefaultInput from '@/components/Input/DefaultInput';
import classNames from 'classnames';

import styles from '@/components/Input/SimpleInput/SimpleInput.css';

interface Props {
  onChange: () => void;
}

const SimpleInput: React.FC<Props> = props => {
  return <DefaultInput {...props} className={classNames(styles.input, styles['input--simple'])} />;
};

export default SimpleInput;
