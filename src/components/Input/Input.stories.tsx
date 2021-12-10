import React, { useState } from 'react';
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

const Template = args => {
  const [value, setValue] = useState('');

  return <Input id='input-id' {...args} value={value} onChange={e => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text',
  label: 'Input Label'
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
  label: 'Once you click out of the input it will turn red because it is required',
  required: true
};

export const WithPrepend = Template.bind({});
WithPrepend.args = {
  placeholder: 'Look, there is a money prepend!',
  prepend: <div>$</div>,
  label: 'Look, there is a prepend!'
};

export const WithPrependSeparator = Template.bind({});
WithPrependSeparator.args = {
  prepend: <div>$</div>,
  withPrependSeparator: true,
  label: 'Look, there is a prepend separator!'
};

export const WithDefaultActionIcon = Template.bind({});
WithDefaultActionIcon.args = {
  label: 'Click in that action item to see what happens!',
  withActionIcon: true,
  onClickActionIcon: () => alert('default action icon was clicked')
};

export const WithCustomActionIcon = Template.bind({});
WithCustomActionIcon.args = {
  label: 'Click in that custom item to see what happens!',
  actionIcon: <TestSearchIcon height='10' width='10' />,
  withActionIcon: true,
  onClickActionIcon: () => alert('custom action icon was clicked')
};

export const WithFilters = Template.bind({});
WithFilters.args = {
  label: "You can't type a number.",
  filters: [
    {
      type: 'RegExp',
      test: /\d/
    }
  ]
};

export const WithValidations = Template.bind({});
WithValidations.args = {
  label: 'Only a codelitt email is valid here',
  validations: [
    {
      type: 'RegExp',
      test: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
      invalidMessage: 'It needs to be a valid email'
    },
    {
      type: 'function',
      test: value => !!value.match(/.*codelitt.*/),
      invalidMessage: 'It needs to be a Codelitt email'
    }
  ]
};

export const WithInputDate = Template.bind({});
WithInputDate.args = {
  inputType: 'date'
};
