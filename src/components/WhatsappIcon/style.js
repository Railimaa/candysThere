import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.terc};
  color: white;
  font-size: 24px;
  z-index: 9999;
  text-decoration: none;





  @media (min-width: 768px) {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  @media (min-width: 992px) {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
`;
