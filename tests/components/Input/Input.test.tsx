import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Input, { Type } from '../../../src/components/Input';

afterEach(cleanup);

describe('Input', () => {
  const dateValue = '2019-01-01';
  const value = 'the_value';

  const getComponent = (v: string, type: Type = 'text') =>
    render(
      <Input
        id="1"
        label="the_label"
        onChange={() => {}}
        type={type}
        value={v}
        wrapperClassname="wrapperClass"
        status="success"
      />,
    );

  it('renders without crashing', () => {
    expect(getComponent(value)).toMatchSnapshot();
  });

  it('displays the given value', () => {
    return expect(getComponent(value)!.findByDisplayValue(value)).toBeTruthy();
  });

  it('renders with the default type=text', () => {
    return expect(getComponent(value)!.getByDisplayValue(value)).toHaveProperty(
      'type',
      'text',
    );
  });

  it('renders an input with type date', () => {
    return expect(
      getComponent(dateValue, 'date')!.getByDisplayValue(dateValue),
    ).toHaveProperty('type', 'date');
  });
});
