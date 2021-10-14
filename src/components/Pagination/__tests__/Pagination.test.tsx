import React from 'react';
import Pagination, { Props } from '@/components/Pagination';
import { mount } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const FIRST_PAGE = 1;
const LAST_PAGE = 5;

describe('Pagination', () => {
  it('renders correctly', () => {
    const onSelectPage = jest.fn();
    const wrapper = mount(
      <Pagination
        totalPages={10}
        numberOfPagesToShow={3}
        currentPage={FIRST_PAGE}
        onSelectPage={onSelectPage}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('Number of pages', () => {
    it('is established by the user', () => {
      const onSelectPage = jest.fn();
      renderPagination({ onSelectPage });
      const paginationList = screen.getByTestId('pagination-element');
      expect(paginationList).toHaveTextContent(/1/);
      expect(paginationList).toHaveTextContent(/2/);
      expect(paginationList).toHaveTextContent(/3/);
      expect(paginationList).not.toHaveTextContent(/4/);
      expect(paginationList).not.toHaveTextContent(/5/);
    });
  });

  describe('Usage of the prev button', () => {
    it('is disabled if you are on the first page', () => {
      const onSelectPage = jest.fn();
      const utils = renderPagination({ onSelectPage });
      const prevButton = utils.getByText(/Prev/i).closest('button') as HTMLButtonElement;
      expect(prevButton.disabled).toBeTruthy();
    });

    it('is enabled if previous pages exist', () => {
      const onSelectPage = jest.fn();
      const utils = renderPagination({ onSelectPage, currentPage: FIRST_PAGE + 1 });
      const prevButton = utils.getByText(/Prev/i).closest('button') as HTMLButtonElement;
      expect(prevButton.disabled).not.toBeTruthy();
    });

    it('calls onSelectPage prop with the correct page', () => {
      const onSelectPage = jest.fn();
      renderPagination({ onSelectPage, currentPage: FIRST_PAGE + 1 });
      fireEvent.click(screen.getByText(/Prev/));
      expect(onSelectPage).toHaveBeenCalledWith(FIRST_PAGE);
    });
  });

  describe('Usage of the page number buttons', () => {
    it('calls onSelectPage prop with the correct number', () => {
      const onSelectPage = jest.fn();
      renderPagination({ onSelectPage, currentPage: FIRST_PAGE + 2 });
      fireEvent.click(screen.getByText(/4/));
      expect(onSelectPage).toHaveBeenCalledWith(FIRST_PAGE + 3);
    });
  });

  describe('Usage of the next button', () => {
    it('is disabled if you are on the last page', () => {
      const onSelectPage = jest.fn();
      const utils = renderPagination({ onSelectPage, currentPage: LAST_PAGE });
      const nextButton = utils.getByText(/next/i).closest('button') as HTMLButtonElement;
      expect(nextButton.disabled).toBeTruthy();
    });

    it('is enabled if next page exists', () => {
      const onSelectPage = jest.fn();
      const utils = renderPagination({ onSelectPage, currentPage: FIRST_PAGE + 2 });
      const nextButton = utils.getByText(/next/i).closest('button') as HTMLButtonElement;
      expect(nextButton.disabled).not.toBeTruthy();
    });

    it('calls onSelectPage prop with the correct page', () => {
      const onSelectPage = jest.fn();
      renderPagination({ onSelectPage, currentPage: FIRST_PAGE + 1 });
      fireEvent.click(screen.getByText(/Next/));
      expect(onSelectPage).toHaveBeenCalledWith(FIRST_PAGE + 2);
    });
  });
});

function renderPagination(props: Partial<Props> = {}) {
  return render(
    <Pagination
      totalPages={LAST_PAGE}
      numberOfPagesToShow={3}
      currentPage={FIRST_PAGE}
      onSelectPage={e => e}
      {...props}
    />
  );
}
