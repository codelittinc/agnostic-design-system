export const getSelectedPage = (currentPage: number, totalPages: number) =>
  Math.max(Math.min(currentPage, totalPages), 1);
