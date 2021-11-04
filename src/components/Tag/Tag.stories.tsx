import React from 'react';
import Tag from '@/components/Tag';
import { Meta } from '@storybook/react';
import mdx from './Tag.stories.mdx';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  return <Tag {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Testing Tag'
};

export const WithHTMLChildren = Template.bind({});
WithHTMLChildren.args = {
  children: <div>Tag with a HTML children</div>
};
