import React from 'react';
import { Meta } from '@storybook/react';
import Button from '../Button/';
import Tooltip from '@/components/Tooltip';
import mdx from './Tooltip.stories.mdx';
import TestSearchIcon from '@/assets/images/icons/web/search-simple.svg';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const renderButton = () => <Button category='neutral' text='Button' />;

const Template = args => <Tooltip {...args} children={renderButton()} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Tooltip',
  position: 'top'
};

export const WithElement = Template.bind({});
const renderElement = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ marginRight: '5px' }}>
      <TestSearchIcon height='20px' width='20px' />
    </div>
    <p style={{ margin: 0 }}>Tooltip</p>
  </div>
);
WithElement.args = {
  content: renderElement(),
  position: 'top'
};

export const withDisabled = () => {
  return (
    <>
      <Tooltip content='Tooltip' disabled>
        {renderButton()}
      </Tooltip>
      <p>Tooltip with a disabled property set to true</p>
    </>
  );
};
