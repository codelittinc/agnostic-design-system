import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import PaginatedTable, { Props } from '@/components/PaginatedTable';
import { mount } from 'enzyme';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('PaginatedTable', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <PaginatedTable
        currentPage={1}
        handlePageChange={() => {}}
        headerList={['First Name', 'Last Name', 'Handle', 'User Type', 'Status']}
        id='paginated-table'
        itemsOnCurrentPage={[
          ['John', 'Oto', '@timo', 'type1', 'Active'],
          ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
          ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
          ['Lary', 'King', '@timo', 'type1', 'Inactive'],
          ['Helen', 'Bonham', '@timo', 'type2', 'Active']
        ]}
        limit={5}
        totalNumberOfItems={15}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('Paginated input', () => {
    it('accepts the number of the page to display', () => {
      renderPaginatedTable();
      const PaginatedTableList = screen.getByTestId('table-element');
      const paginationInput = PaginatedTableList.querySelector('input')!;
      expect(paginationInput).toHaveValue('1');
      fireEvent.change(paginationInput, { target: { value: '3' } });
      expect(paginationInput).toHaveValue('3');
    });

    it('does not accept numbers smaller than 1', () => {
      renderPaginatedTable();
      const PaginatedTableList = screen.getByTestId('table-element');
      const paginationInput = PaginatedTableList.querySelector('input')!;
      expect(paginationInput).toHaveValue('1');
    });

    it('does not accept numbers bigger than the total number of pages', () => {
      renderPaginatedTable();
      const PaginatedTableList = screen.getByTestId('table-element');
      const paginationInput = PaginatedTableList.querySelector('input')!;
      expect(paginationInput).toHaveValue('1');
      fireEvent.change(paginationInput, { target: { value: '5' } });
      expect(paginationInput).toHaveValue('1');
    });
  });

  describe('Number of items displayed', () => {
    it('changes if you change the page', () => {
      renderPaginatedTable({
        itemsOnCurrentPage: [
          ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
          ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
          ['Lary', 'King', '@timo', 'type1', 'Inactive'],
          ['Helen', 'Bonham', '@timo', 'type2', 'Active'],
          ['Felix', 'Dougherty', '@timo', 'type1', 'Active'],
          ['Joseph', 'Thomas', '@timo', 'type1', 'Inactive'],
          ['Richard', 'Cardenas', '@timo', 'type1', 'Active'],
          ['Karl', 'Roy', '@twitter', 'type2', 'Active'],
          ['Sean', 'Steppe', '@timo', 'type1', 'Inactive'],
          ['Samuel', 'Marriott', '@twitter', 'type1', 'Inactive']
        ],
        limit: 10
      });
      const PaginatedTableItems = screen
        .getByTestId('table-element')
        .querySelector('.pagination-items')!;

      const paginationInput = screen.getByTestId('table-element').querySelector('input')!;

      expect(PaginatedTableItems).toHaveTextContent(/1 - 10 of 15 items/);
      fireEvent.change(paginationInput, { target: { value: 2 } });
      expect(PaginatedTableItems).toHaveTextContent(/11 - 15 of 15 items/);
    });

    it('shows the right number of items per page', () => {
      renderPaginatedTable({
        itemsOnCurrentPage: [
          ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
          ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
          ['Lary', 'King', '@timo', 'type1', 'Inactive'],
          ['Helen', 'Bonham', '@timo', 'type2', 'Active'],
          ['Felix', 'Dougherty', '@timo', 'type1', 'Active'],
          ['Joseph', 'Thomas', '@timo', 'type1', 'Inactive'],
          ['Richard', 'Cardenas', '@timo', 'type1', 'Active']
        ],
        limit: 7,
        totalNumberOfItems: 10
      });
      const PaginatedTableItems = screen
        .getByTestId('table-element')
        .querySelector('.pagination-items')!;

      const paginationInput = screen.getByTestId('table-element').querySelector('input')!;

      expect(PaginatedTableItems).toHaveTextContent(/1 - 7 of 10 items/);
      fireEvent.change(paginationInput, { target: { value: 2 } });
      expect(PaginatedTableItems).toHaveTextContent(/8 - 10 of 10 items/);
    });
  });

  describe('Usage of the prev button', () => {
    it('is disabled if you are on the first page', () => {
      renderPaginatedTable();
      const table = screen.getByTestId('table-element');
      const prevButton = within(table).getByText(/Prev/i).closest('button') as HTMLButtonElement;
      expect(prevButton.disabled).toBeTruthy();
    });

    it('is enabled if previous pages exist', () => {
      renderPaginatedTable({ currentPage: 2 });
      const table = screen.getByTestId('table-element');
      const prevButton = within(table).getByText(/Prev/i).closest('button') as HTMLButtonElement;
      expect(prevButton.disabled).not.toBeTruthy();
    });

    it('calls handlePageChange with the correct page number', () => {
      const handlePageChange = jest.fn();
      renderPaginatedTable({ handlePageChange, currentPage: 2 });
      fireEvent.click(screen.getByText(/Prev/));
      expect(handlePageChange).toHaveBeenCalledWith(1);
    });
  });

  describe('Usage of the next button', () => {
    it('is disabled if you are on the last page', () => {
      renderPaginatedTable({ currentPage: 3 });
      const table = screen.getByTestId('table-element');
      const nextButton = within(table).getByText(/Next/i).closest('button') as HTMLButtonElement;
      expect(nextButton.disabled).toBeTruthy();
    });

    it('is enabled if next pages exist', () => {
      renderPaginatedTable({ currentPage: 2 });
      const table = screen.getByTestId('table-element');
      const nextButton = within(table).getByText(/Next/i).closest('button') as HTMLButtonElement;
      expect(nextButton.disabled).not.toBeTruthy();
    });

    it('calls handlePageChange with the correct page number', () => {
      const handlePageChange = jest.fn();
      renderPaginatedTable({ handlePageChange, currentPage: 2 });
      fireEvent.click(screen.getByText(/Next/));
      expect(handlePageChange).toHaveBeenCalledWith(3);
    });
  });
});

function Wrapper(props) {
  const [page, setPage] = useState(1);

  return (
    <PaginatedTable
      currentPage={page}
      id='paginated-table'
      itemsOnCurrentPage={[
        ['John', 'Oto', '@timo', 'type1', 'Active'],
        ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
        ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
        ['Lary', 'King', '@timo', 'type1', 'Inactive'],
        ['Helen', 'Bonham', '@timo', 'type2', 'Active']
      ]}
      handlePageChange={setPage}
      headerList={['First Name', 'Last Name', 'Handle', 'User Type', 'Status']}
      totalNumberOfItems={15}
      limit={5}
      {...props}
    />
  );
}

function renderPaginatedTable(props: Partial<Props> = {}) {
  return render(<Wrapper {...props} />);
}
