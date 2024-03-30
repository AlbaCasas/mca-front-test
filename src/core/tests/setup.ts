import { afterEach, expect, vitest } from 'vitest';

import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';

expect.extend(matchers);

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.scrollTo = () => null;

vitest.mock('@core/api/getCorsSafeUrl', () => ({
  getCorsSafeURL: (url: string) => url
}));

afterEach(() => {
  cleanup();
});
