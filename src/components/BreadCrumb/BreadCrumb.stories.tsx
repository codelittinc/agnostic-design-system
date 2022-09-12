import React from 'react';
import { Meta } from '@storybook/react';
import BreadCrumb from '@/components/BreadCrumb';
import mdx from './BreadCrumb.stories.mdx';
import ArrowRight from '@/assets/images/icons/web/arrow-right.svg';

export default {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  return <BreadCrumb {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  separator: '/',
  items: [
    { title: 'Link One', link: 'https://link-one.com' },
    { title: 'Link Two', link: 'https://link-two.com' },
    { title: 'Link Three', link: 'https://link-three.com' },
    { title: 'Link Four', link: 'https://link-four.com' }
  ]
};

export const Custom = Template.bind({});
Custom.args = {
  separator: <ArrowRight fill='#10193C' />,
  items: [
    { title: 'Link One', link: 'https://link-one.com' },
    { title: 'Link Two', link: 'https://link-two.com' },
    { customLink: <span style={{ color: 'red' }}>Link Three</span> }
  ]
};
