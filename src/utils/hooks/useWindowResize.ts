import { useState, useEffect } from 'react';

const getWidth = () =>
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const getHeight = () =>
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function useCurrentWindowSize() {
  const [widthWindow, setWidthWindow] = useState(getWidth());
  const [heightWindow, setHeightWindow] = useState(getHeight());

  useEffect(() => {
    let timeoutId;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidthWindow(getWidth());
        setHeightWindow(getHeight());
      }, 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return { widthWindow, heightWindow };
}

export default useCurrentWindowSize;
