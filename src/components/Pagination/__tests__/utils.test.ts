import { getSelectedPage } from '../utils';

describe('Utils', () => {
  describe('getSelectedPage', () => {
    it('returns the current page if it is smaller than total pages', () => {
      const totalPages = 5;
      const currentPage = 3;
      const returnedPage = getSelectedPage(currentPage, totalPages);
      expect(returnedPage).toBe(3);
    });
    it('returns the total page if it is smaller than current page', () => {
      const totalPages = 3;
      const currentPage = 5;
      const returnedPage = getSelectedPage(currentPage, totalPages);
      expect(returnedPage).toBe(3);
    });
    it('returns first page if current page is smaller than 0', () => {
      const totalPages = 3;
      const currentPage = -3;
      const returnedPage = getSelectedPage(currentPage, totalPages);
      expect(returnedPage).toBe(1);
    });
  });
});
