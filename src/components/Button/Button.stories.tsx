import React from 'react';
import { Meta } from '@storybook/react';
import Button from '@/components/Button';
import TestSearchIcon from '@/assets/images/icons/web/search-simple.svg';
import mdx from './Button.stories.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => <Button {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  text: 'Neutral Button',
  category: 'neutral'
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  category: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  category: 'secondary'
};

export const Positive = Template.bind({});
Positive.args = {
  text: 'Positive Button',
  category: 'positive'
};

export const Negative = Template.bind({});
Negative.args = {
  text: 'Negative Button',
  category: 'negative'
};

export const Ghost = Template.bind({});
Ghost.args = {
  text: 'Ghost Button',
  category: 'ghost'
};

export const WithAppendIcon = Template.bind({});
WithAppendIcon.args = {
  text: 'With Append Icon',
  category: 'primary',
  withAppendIcon: true
};

export const WithCustomAppendIcon = Template.bind({});
WithCustomAppendIcon.args = {
  text: 'With Custom Append Icon',
  category: 'primary',
  withAppendIcon: true,
  appendIcon: <TestSearchIcon height='10' width='10' />
};

export const WithoutLabelWithAppendIcon = Template.bind({});
WithoutLabelWithAppendIcon.args = {
  category: 'primary',
  withAppendIcon: true
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  category: 'secondary',
  content: (
    <div>
      <TestSearchIcon />
      <div>Text</div>
    </div>
  )
};
