import React, { useState } from 'react';
import Toggle from '@/components/Toggle';
import { Meta } from '@storybook/react';
import mdx from './Toggle.stories.mdx';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [active, setActive] = useState(args.activeItem);

  return <Toggle {...args} activeItem={active} onChange={setActive} />;
};

const items = [
  {
    title: 'First'
  },
  {
    title: 'Second'
  }
];

export const Default = Template.bind({});

Default.args = {
  activeItem: items[0],
  getLabel: item => item.title,
  getValue: item => item.title,
  items: items
};
