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
  disableRightButton?: boolean;
  disableLeftButton?: boolean;
};

const DualActionButton: React.FC<DualActionButtonProps> = (props: DualActionButtonProps) => {
  const {
    backButtonAction,
    forwardButtonAction,
    text,
    variablesClassName,
    disableLeftButton,
    disableRightButton
  } = props;

  return (
    <div className={classNames(styles.container, variablesClassName)}>
      <Button
        onClick={() => backButtonAction()}
        withAppendIcon
        appendIcon={<IconLeftArrow fill='#10193C' />}
        variablesClassName={classNames(styles.button, variablesClassName)}
        disabled={disableLeftButton}
      />
      <div className={classNames(styles['text-container'], variablesClassName)}>{text}</div>
      <Button
        onClick={() => forwardButtonAction()}
        withAppendIcon
        appendIcon={<IconRightArrow fill='#10193C' />}
        variablesClassName={classNames(styles.button, variablesClassName)}
        disabled={disableRightButton}
      />
    </div>
  );
};

export default DualActionButton;
