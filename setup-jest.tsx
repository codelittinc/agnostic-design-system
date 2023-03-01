// @ts-ignore
import '@testing-library/jest-dom/extend-expect';

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => ''
  })
});
