import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import NumericInput from '@/components/NumericInput';
import mdx from './NumericInput.stories.mdx';

export default {
  title: 'Components/Form/Numeric Input',
  component: NumericInput,
  parameters: {
    docs: {
      page: mdx
    }
  },
  argTypes: {
    max: {
      control: {
        type: 'range',
        min: 0,
        max: 10000,
        step: 100
      }
    }
  }
} as Meta;

const Template = args => {
  const [value, setValue] = useState('');

  return (
    <NumericInput
      id='numeric-input'
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter number',
  label: "You can only type ',', '.' and numbers"
};

export const WithMax = Template.bind({});
WithMax.args = {
  label: 'The max here is 1000',
  max: 1000
};

export const WithPositive = Template.bind({});
WithPositive.args = {
  label: 'You can not type negative numbers here',
  positive: true
};

export const withRadixAndScale = Template.bind({});
withRadixAndScale.args = {
  label: 'The radix here is , and the scale is 2',
  radix: ',',
  scale: 2
};
