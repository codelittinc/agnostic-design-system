import React from 'react';
import DonutChart from '@/components/DonutChart';
import { mount } from 'enzyme';

describe('DonutChart', () => {
  it('renders correctly', () => {
    const args = {
      completion: 55,
      message: 'Completed',
      size: 150,
      strokewidth: 10
    };
    const wrapper = mount(<DonutChart {...args} />);
    expect(wrapper).toMatchSnapshot();
  });
});
