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

export const RequiredTextArea = Template.bind({});
RequiredTextArea.args = {
  required: true,
  placeholder: 'Enter Text'
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  placeholder: 'Enter text',
  label: 'TextArea Label'
};

export const DefaultWithMessage = Template.bind({});
DefaultWithMessage.args = {
  placeholder: 'Enter text',
  message: 'TextArea Message'
};
