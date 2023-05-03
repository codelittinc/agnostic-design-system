// @ts-ignore
import { Global } from '@jest/types';
import '@testing-library/jest-dom/extend-expect';

declare const global: Global;

delete (global as any).window.open;
(global as any).window ??= Object.create(window);
(global as any).window.open = jest.fn();

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => ''
  })
});
