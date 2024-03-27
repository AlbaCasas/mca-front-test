import classnames from 'classnames';
import type { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * cls() is an abstraction I use in my TailwindCSS projects.
 * It uses twMerge to resolve conflicting classnames:
 * e.g:
 * ----
 * "px-3 bg-red px-4" -> "bg-red px-4",
 * "bg-primary bg-red" -> "bg-red",
 */
export const cls = (...args: ArgumentArray) => twMerge(classnames(...args));
