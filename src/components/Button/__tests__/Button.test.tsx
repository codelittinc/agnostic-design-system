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
    const wrapper = mount(<Button label='this is a test' onClick={jest.fn} category="primary" />);
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

  it('is renders a neutral button', () => {
    const wrapper = mount(<Button label='this is a test' onClick={jest.fn} />);
    expect(wrapper.exists('.button--neutral')).toBeTruthy();
  });

  it('is renders a negative button', () => {
    const wrapper = mount(<Button label='this is a test' onClick={jest.fn} category="negative" />);
    expect(wrapper.exists('.button--negative')).toBeTruthy();
  });

  it('is renders a ghost button', () => {
    const wrapper = mount(<Button label='this is a test' onClick={jest.fn} category="ghost" />);
    expect(wrapper.exists('.button--ghost')).toBeTruthy();
  });
});
