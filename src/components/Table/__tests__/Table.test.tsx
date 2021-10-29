import React from 'react';
import Table from '@/components/Table';
import { mount } from 'enzyme';
import { render, screen } from '@testing-library/react';

const headerList = ['Name', 'Month', 'Gift'];
const body = [
  ['Lisa', 'December', 'Car'],
  ['Tina', 'June', 'Dog'],
  ['Callie', 'August', 'Flowers'],
  ['Ruth', 'September', 'Diamonds']
];

describe('Table', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Table headerList={headerList} tableContent={body} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Table output', () => {
    it('Contains the correct number of header tags', () => {
      render(<Table headerList={headerList} tableContent={body} />);
      const header = screen.getByTestId('table-header').querySelectorAll('th');
      expect(header.length).toBe(headerList.length);
    });

    it('Displays the correct header content', () => {
      render(<Table headerList={headerList} tableContent={body} />);
      const header = screen.getByTestId('table-header');
      expect(header).toHaveTextContent('Name');
      expect(header).toHaveTextContent('Month');
      expect(header).toHaveTextContent('Gift');
    });

    it('Contains the correct number of rows', () => {
      render(<Table headerList={headerList} tableContent={body} />);
      const rows = screen.getByTestId('table-body').querySelectorAll('tr');
      expect(rows.length).toBe(body.length);
    });

    it('Displays the correct body content', () => {
      render(<Table headerList={headerList} tableContent={body} />);
      const header = screen.getByTestId('table-body');
      expect(header).toHaveTextContent('Lisa');
      expect(header).toHaveTextContent('December');
      expect(header).toHaveTextContent('Car');
    });
  });
});
