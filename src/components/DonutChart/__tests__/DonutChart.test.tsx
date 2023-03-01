import React from 'react';
import { render } from '@testing-library/react';
import DonutChart from '@/components/DonutChart';

describe('DonutChart', () => {
  it('renders correctly', () => {
    const args = {
      completion: 55,
      message: 'Completed',
      size: 150,
      strokewidth: 10
    };
    const { container } = render(<DonutChart {...args} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
