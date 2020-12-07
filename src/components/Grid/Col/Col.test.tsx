import React from 'react';
import { render } from '@testing-library/react';
import Col from '@/components/Grid/Col';

describe('Col', () => {
  it('renders without crashing', () => {
    const col = render(<Col />);
    return expect(col!).toMatchSnapshot();
  });

  it('renders children components', () => {
    const text = 'Codelitt';
    const { getByText } = render(
      <Col>
        <p>{text}</p>
      </Col>
    );

    return expect(getByText(text)).toBeInTheDocument();
  });

  describe('when using responsive columns', () => {
    const getCol = () => {
      const { container } = render(<Col xs={4} sm={4} md={3} lg={1} />);

      return container.firstChild;
    };

    it('adds the xs class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-xs-4');
    });

    it('adds the sm class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-sm-4');
    });

    it('adds the md class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-md-3');
    });

    it('adds the lg class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-lg-1');
    });
  });
});
