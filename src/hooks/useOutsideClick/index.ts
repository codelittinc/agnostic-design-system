import { useEffect } from 'react';

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (T?: any) => void
) => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(<HTMLElement>e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
};
