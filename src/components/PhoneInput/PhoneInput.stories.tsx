import React, { useState } from 'react';
import PhoneInput from '@/components/PhoneInput';
import { Meta } from '@storybook/react';
import mdx from './PhoneInput.stories.mdx';

export default {
  title: 'Components/Phone Input',
  component: PhoneInput,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [value, setValue] = useState('');

  return <PhoneInput {...args} value={value} onChange={e => setValue(e)} />;
};

export const Default = Template.bind({});
Default.args = {
  country: 'us',
  label: 'Default phone input'
};

export const LocalPhoneNumber = Template.bind({});
LocalPhoneNumber.args = {
  country: 'us',
  localNumber: true,
  placeholder: '(702) 123-4567',
  label: 'Local phone number input'
};
