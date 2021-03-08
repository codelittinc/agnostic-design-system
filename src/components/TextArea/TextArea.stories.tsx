import React from 'react';
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

const Template = args => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter Text'
};

export const Positive = Template.bind({});
Positive.args = {
  state: 'valid',
  placeholder: 'Enter Text'
};

export const Negative = Template.bind({});
Negative.args = {
  state: 'invalid',
  placeholder: 'Enter Text'
};

export const RequiredTextArea = Template.bind({});
RequiredTextArea.args = {
  required: true,
  placeholder: 'Enter Text'
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  placeholder: 'Enter text',
  label: 'Input Label'
};

export const PositiveWithLabel = Template.bind({});
PositiveWithLabel.args = {
  state: 'valid',
  placeholder: 'Enter Text',
  label: 'Input Label'
};

export const NegativeWithLabel = Template.bind({});
NegativeWithLabel.args = {
  state: 'invalid',
  placeholder: 'Enter Text',
  label: 'Input Label'
};
