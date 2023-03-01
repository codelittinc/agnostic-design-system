import React from 'react';
import PhoneInput from '@/components/PhoneInput';
import { render, fireEvent } from '@testing-library/react';

describe('PhoneInput', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<PhoneInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('Local number', () => {
    it('defaults to US mask', () => {
      const utils = render(<PhoneInput placeholder='(999) 999-9999' localNumber />);

      const input = utils.getByPlaceholderText('(999) 999-9999') as HTMLInputElement;

      fireEvent.change(input, { target: { value: '2376324232' } });
      const expectedText = '(237) 632-4232';
      expect(input.value).toBe(expectedText);

      fireEvent.change(input, { target: { value: '5606786876' } });
      const expectedText2 = '(560) 678-6876';
      expect(input.value).toBe(expectedText2);

      fireEvent.change(input, { target: { value: '7698076867' } });
      const expectedText3 = '(769) 807-6867';
      expect(input.value).toBe(expectedText3);
    });

    it('can receive different masks', () => {
      const utils = render(
        <PhoneInput
          placeholder='(99) 99999-9999'
          localNumber
          country='br'
          masks={{ br: '(..) .....-....' }}
        />
      );

      const input = utils.getByPlaceholderText('(99) 99999-9999') as HTMLInputElement;

      fireEvent.change(input, { target: { value: '65992168563' } });
      const expectedText = '(65) 99216-8563';
      expect(input.value).toBe(expectedText);

      fireEvent.change(input, { target: { value: '23423423424' } });
      const expectedText2 = '(23) 42342-3424';
      expect(input.value).toBe(expectedText2);

      fireEvent.change(input, { target: { value: '51132357875' } });
      const expectedText3 = '(51) 13235-7875';
      expect(input.value).toBe(expectedText3);
    });
  });
});
