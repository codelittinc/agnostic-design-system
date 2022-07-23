import React from 'react';
import { Meta } from '@storybook/react';
import Toast from '@/components/Toast';
import mdx from './Toast.stories.mdx';

export default {
  title: 'Components/Dialog/Toast',
  component: Toast,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  title: 'Success',
  size: 'large',
  message: 'This is a success Toast',
  category: 'success'
};

export const SuccessAutoClose = Template.bind({});
SuccessAutoClose.args = {
  title: 'Success',
  message: 'This is a success Toast with AutoClose',
  category: 'success',
  autoCloseInMilliseconds: 2000
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  size: 'large',
  message: 'This is an error Toast',
  category: 'error'
};

export const ErrorAutoClose = Template.bind({});
ErrorAutoClose.args = {
  title: 'Error',
  message: 'This is an error Toast with AutoClose',
  category: 'error',
  autoCloseInMilliseconds: 2000
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  size: 'large',
  message: 'This is an warning Toast',
  category: 'warning'
};

export const WarningAutoClose = Template.bind({});
WarningAutoClose.args = {
  title: 'Warning',
  message: 'This is an warning Toast with AutoClose',
  category: 'warning',
  autoCloseInMilliseconds: 2000
};
