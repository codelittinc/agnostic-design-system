import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Modal from '@/components/Modal';
import mdx from './Modal.stories.mdx';
import styles from './Modal.stories.css';
import classNames from 'classnames';
import Button from '@/components/Button';
import EmailInput from '@/components/EmailInput';

export default {
  title: 'Components/Content/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button text='Open Modal' category='primary' onClick={() => setOpen(true)} />
      <Modal
        {...args}
        open={open}
        onClickOutside={() => {
          setOpen(false);
        }}
      >
        <div className={styles['default-example-wrapper']}>Default Modal</div>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});

export const WithCustomChildren = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button text='Open Modal' category='primary' onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClickOutside={() => {
          setOpen(false);
        }}
        variablesClassName={styles.modal}
      >
        <div>
          <div className={classNames(styles['header-container'])}>
            Update Password
            <Button
              variablesClassName={styles.button}
              text='X'
              category='ghost'
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          <div className={classNames(styles['body-container'])}>
            <EmailInput
              placeholder='Enter email'
              label='Email Input'
              value=''
              onChange={() => {}}
            />
          </div>
          <div className={classNames(styles['footer-container'])}>
            <Button
              variablesClassName={styles['footer-button']}
              text='Cancel'
              category='neutral'
              onClick={() => {
                setOpen(false);
              }}
            />
            <Button
              variablesClassName={styles['footer-button']}
              text='Update Password'
              category='primary'
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
