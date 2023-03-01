import React from 'react';
import Tag from '@/components/Tag';
import { render } from '@testing-library/react';

describe('Tag', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Tag>Testing Tag</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
});
