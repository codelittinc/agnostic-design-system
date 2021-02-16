import React from 'react';
import { Meta } from '@storybook/react';
import Button from '@/components/Button';
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
  label: 'Neutral Button',
  category: 'neutral'
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  category: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  category: 'secondary'
};

export const Positive = Template.bind({});
Positive.args = {
  label: 'Positive Button',
  category: 'positive'
};

export const Negative = Template.bind({});
Negative.args = {
  label: 'Negative Button',
  category: 'negative'
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Ghost Button',
  category: 'ghost'
};
