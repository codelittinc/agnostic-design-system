import React, { useState } from 'react';
import Table from '@/components/Table';
import { render, screen, fireEvent } from '@testing-library/react';

const headerList = ['Name', 'Month', 'Gift'];
const body = [
  ['Lisa', 'December', 'Car'],
  ['Tina', 'June', 'Dog'],
  ['Callie', 'August', 'Flowers'],
  ['Ruth', 'September', 'Diamonds']
];

describe('Table', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Table headerList={headerList} tableContent={body} />);
    expect(asFragment()).toMatchSnapshot();
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

  describe('Sortable table', () => {
    const SortableTable = () => {
      const [sortState, setSortState] = useState({});

      return (
        <div>
          <p data-testid='field'>Sort Field: {'sortField' in sortState && sortState.sortField}</p>
          <p data-testid='order'>Sort Order: {'sortOrder' in sortState && sortState.sortOrder}</p>
          <Table headerList={headerList} tableContent={body} setSortState={setSortState} />
        </div>
      );
    };

    it('Displays the correct start sorting order and field', () => {
      render(<SortableTable />);
      const sortField = screen.getByTestId('field');
      const sortOrder = screen.getByTestId('order');
      expect(sortField).toHaveTextContent('Sort Field: Name');
      expect(sortOrder).toHaveTextContent('Sort Order: ASC');
    });

    it('Displays the correct sorting field after it is updated', () => {
      render(<SortableTable />);
      fireEvent.click(screen.getByText(/Month/));
      const sortField = screen.getByTestId('field');
      expect(sortField).toHaveTextContent('Sort Field: Month');
    });

    it('Displays the correct sorting order after it is updated', () => {
      render(<SortableTable />);
      const secondHeaderElement = screen.getByText(/Month/);
      fireEvent.click(secondHeaderElement);
      fireEvent.click(secondHeaderElement);
      const sortField = screen.getByTestId('field');
      const sortOrder = screen.getByTestId('order');
      expect(sortField).toHaveTextContent('Sort Field: Month');
      expect(sortOrder).toHaveTextContent('Sort Order: DESC');
    });
  });
});
