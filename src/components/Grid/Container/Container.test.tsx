import React from 'react';
import { render } from '@testing-library/react';
import Container from '@/components/Grid/Container';
import Row from '@/components/Grid/Row';
import Col from '@/components/Grid/Col';

describe('Container', () => {
  it('renders without crashing', () => {
    const container = render(<Container />);
    return expect(container!).toMatchSnapshot();
  });

  it('renders children components', () => {
    const text = 'Codelitt';
    const { getByText } = render(
      <Container>
        <Row>
          <Col>
            <p>{text}</p>
          </Col>
        </Row>
      </Container>
    );

    return expect(getByText(text)).toBeInTheDocument();
  });
});
