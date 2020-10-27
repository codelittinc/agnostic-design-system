import React from 'react';
import Button from '@/components/Button';
import { mount } from 'enzyme';

describe('ExampleComponent', () => {
  it('is renders correctly', () => {
    const wrapper = mount(<Button label='this is a test' onClick={jest.fn} />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('is renders a fixed button', () => {
    const wrapper = mount(<Button label='this is a test' onClick={jest.fn} fixed />);
    expect(wrapper.exists('.button--fixed')).toBeTruthy();
  });

  it('is renders a primary button', () => {
    const wrapper = mount(<Button label='this is a test' onClick={jest.fn} />);
    expect(wrapper.exists('.button--primary')).toBeTruthy();
  });

  it('is renders a secondary button', () => {
    const wrapper = mount(<Button label='this is a test' onClick={jest.fn} category="secondary" fixed />);
    expect(wrapper.exists('.button--secondary')).toBeTruthy();
  });

  it('is renders a positive button', () => {
    const wrapper = mount(<Button label='this is a test' onClick={jest.fn} category="positive" />);
    expect(wrapper.exists('.button--positive')).toBeTruthy();
  });
});
