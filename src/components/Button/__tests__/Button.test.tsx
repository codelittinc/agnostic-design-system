import React from 'react';
import Button from '@/components/Button';
import { shallow } from 'enzyme';

describe('ExampleComponent', () => {
  it('is renders correctly', () => {
    const wrapper = shallow(<Button title='this is a test' onClick={jest.fn} />);
    expect(wrapper).toMatchSnapshot();
  });
});
