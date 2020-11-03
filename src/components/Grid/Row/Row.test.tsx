import React from 'react';
import { render } from '@testing-library/react';
import Row from '../../../../src/components/Grid/Row';

describe('Row', () => {
  it('renders without crashing', () => {
    const row = render(<Row />);
    return expect(row!).toMatchSnapshot();
  });

  it('renders children components', () => {
    const text = 'Codelitt';
    const row = render(
      <Row>
        <p>{text}</p>
      </Row>,
    );
    return expect(row!.findByDisplayValue(text)).toBeTruthy();
  });
});
