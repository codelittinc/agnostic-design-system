import React from 'react';
import { render } from '@testing-library/react';
import Container from '../../../../src/components/Grid/Container';

describe('Container', () => {
  it('renders without crashing', () => {
    const container = render(<Container />);
    return expect(container!).toMatchSnapshot();
  });

  it('renders children components', () => {
    const text = 'Codelitt';
    const container = render(
      <Container>
        <p>{text}</p>
      </Container>,
    );
    return expect(container!.findByDisplayValue(text)).toBeTruthy();
  });
});
