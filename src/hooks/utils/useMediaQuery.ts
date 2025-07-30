import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if a CSS media query matches.
 * Useful for adapting the user interface based on screen size or other characteristics.
 *
 * @param {string} query The media query string (e.g., '(min-width: 768px)').
 * @returns {boolean} True if the media query matches, false otherwise.
 */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

export default useMediaQuery;
