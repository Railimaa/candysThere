import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
 0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  small {

    font-size: 28px;
    color: ${({ theme }) => theme.colors.terc};
    font-weight: bold;
    animation: ${slideIn} 0.8s ease-in;


    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
`;
