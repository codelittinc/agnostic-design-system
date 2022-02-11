import React from 'react';
import styles from './DualActionButton.css';
import Button from '@/components/Button';
import classNames from 'classnames';
import IconLeftArrow from '@/assets/images/icons/web/arrow-left.svg';
import IconRightArrow from '@/assets/images/icons/web/arrow-right.svg';

type DualActionButtonProps = {
  backButtonAction: () => void;
  forwardButtonAction: () => void;
  text: string;
  variablesClassName?: string;
};

const DualActionButton: React.FC<DualActionButtonProps> = (props: DualActionButtonProps) => {
  const { backButtonAction, forwardButtonAction, text, variablesClassName } = props;

  return (
    <div className={classNames(styles.container, variablesClassName)}>
      <Button
        onClick={() => backButtonAction()}
        withAppendIcon
        appendIcon={<IconLeftArrow fill='#10193C' />}
        variablesClassName={classNames(styles.button, variablesClassName)}
      />
      <div className={classNames(styles['text-container'], variablesClassName)}>{text}</div>
      <Button
        onClick={() => forwardButtonAction()}
        withAppendIcon
        appendIcon={<IconRightArrow fill='#10193C' />}
        variablesClassName={classNames(styles.button, variablesClassName)}
      />
    </div>
  );
};

export default DualActionButton;
