import React from 'react';
import { Meta } from '@storybook/react';
import Input from '@/components/Input';
import TestSearchIcon from '@/assets/images/icons/web/search-simple.svg';
import mdx from './Input.stories.mdx';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text'
};

export const DefaultWithLabelText = Template.bind({});
DefaultWithLabelText.args = {
  placeholder: 'Enter text',
  label: 'Input Label',
  id: 'input-id'
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  placeholder: 'Enter text',
  label: (
    <div style={{ marginBottom: 20 }}>
      <span style={{ color: 'green', marginRight: 10 }}>1/2</span>
      <label style={{ color: 'blue' }}>Test Custom Label</label>
    </div>
  )
};

export const RequiredInput = Template.bind({});
RequiredInput.args = {
  placeholder: 'Enter text',
  label: 'Required Input',
  id: 'input-id',
  required: true
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  label: 'Email',
  validationRegex: '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)',
  placeholder: 'Enter Email',
  invalidMessage: 'Invalid email'
};

export const WithPrepend = Template.bind({});
WithPrepend.args = {
  placeholder: 'Enter Text',
  prepend: <div>$</div>,
  label: 'Email',
  validationRegex: '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)',
  invalidMessage: 'Invalid email'
};

export const WithPrependSeparator = Template.bind({});
WithPrependSeparator.args = {
  placeholder: 'Enter Text',
  prepend: <div>$</div>,
  withPrependSeparator: true,
  label: 'Email',
  validationRegex: '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)',
  invalidMessage: 'Invalid email'
};

export const WithDefaultActionIcon = Template.bind({});
WithDefaultActionIcon.args = {
  placeholder: 'Enter text',
  withActionIcon: true,
  onClickActionIcon: () => alert('default action icon was clicked')
};

export const WithCustomActionIcon = Template.bind({});
WithCustomActionIcon.args = {
  placeholder: 'Enter text',
  actionIcon: <TestSearchIcon height='10' width='10' />,
  withActionIcon: true,
  onClickActionIcon: () => alert('custom action icon was clicked')
};

export const WithFilter = Template.bind({});
WithFilter.args = {
  placeholder: "You can't type a number.",
  allowedCharsRegex: /[a-zA-Z]/g,
  onClickActionIcon: () => alert('custom action icon was clicked')
};

export const WithCustomValidation = Template.bind({});
WithCustomValidation.args = {
  placeholder: 'Place your codelitt email',
  invalidMessage: 'It needs to be a Codelitt email',
  validationRegex: '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)',
  customValidation: value => value.match(/.*codelitt.*/)
};
