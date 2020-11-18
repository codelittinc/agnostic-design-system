import React from 'react';
import { Meta } from '@storybook/react';
import Icon from '@/components/Icon';

export default {
  title: 'Icon',
  component: Icon
} as Meta;

const Template = args => <Icon {...args} />;

export const Search = Template.bind({});
Search.args = {
  height: '15',
  width: '15',
  name: 'search',
  title: 'Search Button',
  description: 'Here is a randomic description'
};
