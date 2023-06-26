import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Slide, ImageContainer } from './style';

export default function CarouselImages({ images }) {
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleBeforeChange = () => {
      setAutoplay(false);
    };

    const handleAfterChange = () => {
      setAutoplay(true);
    };

    sliderRef.current?.innerSlider?.list.addEventListener('click', handleBeforeChange);
    sliderRef.current?.innerSlider?.list.addEventListener('transitionend', handleAfterChange);

    return () => {
      sliderRef.current?.innerSlider?.list.removeEventListener('click', handleBeforeChange);
      sliderRef.current?.innerSlider?.list.removeEventListener('transitionend', handleAfterChange);
    };
  }, []);

  return (

    <Slide
      ref={sliderRef}
      dots={false}
      infinite
      speed={600}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={autoplay}
      autoplaySpeed={2000}
    >
      {images.map((image) => (
        <div key={image.id}>
          <ImageContainer>
            <img src={image.src} alt={image.alt} />
            {image.caption && <p>{image.caption}</p>}
          </ImageContainer>
        </div>
      ))}
    </Slide>

  );
}

CarouselImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired,
};
