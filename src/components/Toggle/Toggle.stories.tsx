import React from 'react';
import { Meta } from '@storybook/react';
import Toggle from '@/components/Toggle';
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
  return <Toggle {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  
};

export const WithDefinedBackground = Template.bind({});
WithDefinedBackground.args = {
 
};

export const WithFullScreenBackground = Template.bind({});
WithFullScreenBackground.args = {

};
