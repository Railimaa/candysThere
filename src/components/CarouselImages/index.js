import PropTypes from 'prop-types';
import { Slide, ImageContainer } from './style';
import useCarousel from './useCarousel';

export default function CarouselImages({ images }) {
  const { sliderRef, autoplay } = useCarousel();

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
