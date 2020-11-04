import React from 'react';
import { render } from '@testing-library/react';
import Row from '@/components/Grid/Row';
import Col from '@/components/Grid/Col';
import "@testing-library/jest-dom/extend-expect"

describe('Row', () => {
  it('renders without crashing', () => {
    const row = render(<Row />);
    return expect(row!).toMatchSnapshot();
  });

  it('renders children components', () => {
    const text = 'Codelitt';
    const { getByText } = render(
      <Row>
        <Col>
          <p>{text}</p>
        </Col>
      </Row>,
    );
    return expect(getByText(text)).toBeInTheDocument();
  });
});
