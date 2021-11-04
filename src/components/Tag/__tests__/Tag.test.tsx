import React from 'react';
import Tag from '@/components/Tag';
import { mount } from 'enzyme';

describe('Tag', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Tag>Testing Tag</Tag>);
    expect(wrapper).toMatchSnapshot();
  });
});
