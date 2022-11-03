import React from 'react';
import EmptyState from '@/components/EmptyState';
import TestImage from '@/assets/images/icons/web/gear.svg';
import mdx from './EmptyState.stories.mdx';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Content/EmptyState',
  component: EmptyState,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  return <EmptyState {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit viverra aliquam.',
  title: 'Lorem Ipsum'
};

export const WithCustomImage = Template.bind({});
WithCustomImage.args = {
  description: 'Hello World',
  image: <TestImage height='100%' width='100%' />,
  title: 'Hello World'
};

export const WithElementAsText = Template.bind({});
WithElementAsText.args = {
  description: <span>HTML Description</span>,
  title: <p>HTML Title</p>
};
