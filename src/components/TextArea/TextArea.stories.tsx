import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import TextArea from '@/components/TextArea';
import mdx from './TextArea.stories.mdx';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [value, setValue] = useState('');
  return <TextArea {...args} value={value} onChange={value => setValue(value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter Text'
};

export const WithStringLabel = Template.bind({});
WithStringLabel.args = {
  label: 'TextArea Label',
  placeholder: 'Enter text'
};

export const WithReactNodeLabel = Template.bind({});
WithReactNodeLabel.args = {
  placeholder: 'Enter text',
  label: (
    <div style={{ marginBottom: 20 }}>
      <span style={{ color: 'green', marginRight: 10 }}>1/2</span>
      <label style={{ color: 'blue' }}>Check my nice node label</label>
    </div>
  )
};

export const WithRequired = Template.bind({});
WithRequired.args = {
  label: 'This is a required TextArea',
  placeholder: 'Required TextArea',
  required: true
};

export const WithInvalidMessage = Template.bind({});
WithInvalidMessage.args = {
  label: 'This is a required TextArea with invalid message',
  required: true,
  invalidMessage: 'This is a invalid Message',
  placeholder: 'Required TextArea',
  message: 'TextArea'
};

export const WithMaxLengthDefined = Template.bind({});
WithMaxLengthDefined.args = {
  label: 'This is a TextArea with a MaxLength of 5 defined',
  maxLength: 5,
  placeholder: 'MaxLength defined TextArea',
  message: 'TextArea'
};
