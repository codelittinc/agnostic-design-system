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
      const { container } = render(<Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1} />);

      return container.firstChild;
    };

    it('adds the xxs class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-xxs-4');
    });

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

    it('adds the xl class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-xl-1');
    });

    it('adds the xxl class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-xxl-1');
    });
  });

  describe('when using no left gutters', () => {
    const getCol = () => {
      const { container } = render(<Col gutterType='no-left-gutter' />);

      return container.firstChild;
    };

    it('adds the no left gutters class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-xs-4 codelitt-col-no-left-gutter');
    });
  });

  describe('when using no right gutters', () => {
    const getCol = () => {
      const { container } = render(<Col gutterType='no-right-gutter' />);

      return container.firstChild;
    };

    it('adds the no right gutters class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-xs-4 codelitt-col-no-right-gutter');
    });
  });

  describe('when using no gutters', () => {
    const getCol = () => {
      const { container } = render(<Col gutterType='no-gutters' />);

      return container.firstChild;
    };

    it('adds the no gutters class', () => {
      expect(getCol()).toHaveClass('codelitt-col codelitt-col-xs-4 codelitt-col-no-gutters');
    });
  });
});
