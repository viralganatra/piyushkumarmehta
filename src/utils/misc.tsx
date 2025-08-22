import type { RefObject } from 'react';

// Node: ref.current.scrollIntoView({ behavior: 'smooth' }) doesn't work
// correctly in Chrome. In certain cases it doesn't scroll to the element.
export const scrollToRef = (ref: RefObject<HTMLElement>) => {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();

    window.scrollTo(0, rect.top + window.scrollY);
  }
};
