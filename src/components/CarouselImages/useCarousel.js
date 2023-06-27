import { useEffect, useRef, useState } from 'react';

export default function useCarousel() {
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleBeforeChange = () => {
      setAutoplay(false);
    };

    function handleAfterChange() {
      setAutoplay(true);
    }

    sliderRef.current?.innerSlider?.list.addEventListener('click', handleBeforeChange);
    sliderRef.current?.innerSlider?.list.addEventListener('transitionend', handleAfterChange);

    return () => {
      sliderRef.current?.innerSlider?.list.removeEventListener('click', handleBeforeChange);
      sliderRef.current?.innerSlider?.list.removeEventListener('transitionend', handleAfterChange);
    };
  }, []);

  return {
    sliderRef,
    autoplay,
  };
}
