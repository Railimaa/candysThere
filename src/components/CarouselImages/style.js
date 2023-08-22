import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styled from 'styled-components';

export const Slide = styled(Slider)`
  width: 100%;
  margin-top: 10px;

  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme }) => theme.colors.logo};
  }

  @media (max-width: 468px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }

`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
