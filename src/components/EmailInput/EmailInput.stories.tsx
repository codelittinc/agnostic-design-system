import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import EmailInput from '@/components/EmailInput';

export default {
  title: 'Components/Email Input',
  component: EmailInput
} as Meta;

const Template = args => {
  const [value, setValue] = useState('');

  return <EmailInput {...args} value={value} onChange={e => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter email',
  label: 'Email Input'
};

export const WithExtraValidations = Template.bind({});
WithExtraValidations.args = {
  label: 'Only a codelitt email is valid here',
  validations: [
    {
      type: 'function',
      test: value => !!value.match(/.*codelitt.*/),
      invalidMessage: 'It needs to be a Codelitt email'
    }
  ]
};
