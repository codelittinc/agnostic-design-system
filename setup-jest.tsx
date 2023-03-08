// @ts-ignore
import { Global } from '@jest/types';
import '@testing-library/jest-dom/extend-expect';

declare const global: Global;

(global as any).window = window;

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => ''
  })
});
