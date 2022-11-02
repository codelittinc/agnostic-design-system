import React, { useState } from 'react';
import NumericInput from '@/components/NumericInput';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const getNumericInputWrapperComponent = (max?: number, radix?: string, scale: number = 2) => {
  const Wrapper = () => {
    const [value, onChange] = useState('');
    return (
      <NumericInput
        id='numeric-input-test'
        onChange={e => onChange(e || '')}
        onFocus={jest.fn}
        onStateChange={jest.fn}
        max={max}
        placeholder='Enter Number'
        radix={radix}
        scale={scale}
        size='large'
        value={value}
      />
    );
  };

  return render(<Wrapper />);
};

const getInput = (container: HTMLElement): HTMLInputElement => {
  return container.querySelector<HTMLInputElement>('input')!;
};

describe('NumericInput', () => {
  it('renders correctly', () => {
    const { container } = getNumericInputWrapperComponent();
    expect(container).toMatchSnapshot();
  });

  describe('Default NumericInput', () => {
    it('allows to valid numeric values', () => {
      const { container } = getNumericInputWrapperComponent();
      const input = getInput(container);
      fireEvent.change(input, { target: { value: 123 } });
      expect(input.value).toBe('123');
    });

    it('blocks invalid characters from being passed', () => {
      const { container } = getNumericInputWrapperComponent();
      const input = getInput(container);
      fireEvent.change(input, { target: { value: 'test' } });
      const expectedResult = '';
      expect(input.value).toBe(expectedResult);
    });

    it('prevents invalid characters from being passed alongside valid characters', () => {
      const { container } = getNumericInputWrapperComponent();
      const input = getInput(container);
      userEvent.type(input, '123abc');
      const expectedResult = '123';
      expect(input.value).toBe(expectedResult);
    });
  });

  describe('Max-defined Numeric Input', () => {
    describe('Values equal-to or less than the max', () => {
      it('accepts values equal to the max as valid', () => {
        const { container } = getNumericInputWrapperComponent(1000);
        const input = getInput(container);
        userEvent.type(input, '1000');
        expect(input.value).toBe('1000');
      });

      it('accepts values less than the max as valid', () => {
        const { container } = getNumericInputWrapperComponent(1000);
        const input = getInput(container);
        userEvent.type(input, '100');
        expect(input.value).toBe('100');
      });
    });

    describe('Values exceeding the max', () => {
      it('prevents values exceeding the max from being passed', () => {
        const { container } = getNumericInputWrapperComponent(1000);
        const input = getInput(container);
        userEvent.type(input, '10000');
        const expectedResult = '1000';
        expect(input.value).toBe(expectedResult);
      });

      it('prevents values with radix exceeding the max from being passed', () => {
        const { container } = getNumericInputWrapperComponent(1000, ',');
        const input = getInput(container);
        userEvent.type(input, '1000,99');
        const expectedResult = '1000,';
        expect(input.value).toBe(expectedResult);
      });

      it('prevents values with placements exceeding the max from being passed', () => {
        const { container } = getNumericInputWrapperComponent(5000000);
        const input = getInput(container);
        userEvent.type(input, '12.521.215,');
        const expectedResult = '12.521.21';
        expect(input.value).toBe(expectedResult);
      });
    });
  });

  describe('Radix-defined Numeric Input', () => {
    it('accepts comma-defined radix', () => {
      const { container } = getNumericInputWrapperComponent(100, ',');
      const input = getInput(container);
      userEvent.type(input, '100,00');
      expect(input.value).toBe('100,00');
    });

    it('accepts dot-defined radix', () => {
      const { container } = getNumericInputWrapperComponent(100, '.');
      const input = getInput(container);
      userEvent.type(input, '100.00');
      expect(input.value).toBe('100.00');
    });
  });

  describe('Scale-defined Numeric Input', () => {
    it('accepts scale within the defined limit', () => {
      const { container } = getNumericInputWrapperComponent(undefined, '.', 2);
      const input = getInput(container);
      userEvent.type(input, '100.00');
      expect(input.value).toBe('100.00');
    });

    it('prevents decimal value placements from exceeding the scale defined limit', () => {
      const { container } = getNumericInputWrapperComponent(undefined, ',', 2);
      const input = getInput(container);
      userEvent.type(input, '100,101');
      const expectedResult = '100,10';
      expect(input.value).toBe(expectedResult);
    });
  });
});
