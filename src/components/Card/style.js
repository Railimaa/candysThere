import styled, { keyframes, css } from 'styled-components';

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
  flex-direction: column;
  margin-top: 40px;
  padding: 10px;
  max-width: 1200px;
  margin: 0 auto;

  /* @media (max-width: 768px) {
    margin: 0 10px; /* Adicione margens laterais menores em telas menores */
  `;

export const Title = styled.div`
  margin-bottom: 14px;
  margin-top: 40px;


  small {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.terc};
    font-weight: bold;
    animation: ${({ isVisible }) => (isVisible ? css` ${slideIn} 0.7s ease-in;` : 'none')};


    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const CardItem = styled.div`
  padding: 20px 10px;
  background: ${({ theme }) => theme.colors.main};
  overflow-x: auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* flex-wrap: wrap;
  justify-content: space-between; */


  & + & {
    margin-top: 16px;
  }

  small {
    font-size: 20px;
    text-transform: uppercase;
    background: ${({ theme }) => theme.colors.sec};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.white};
    padding: 4px 26px;
    margin-top: 3px;
    border-radius: 12px;
    transition: all 0.3s ease-in;
    font-weight: bold;

    &:hover {
      background: ${({ theme }) => theme.colors.main};
      color: ${({ theme }) => theme.colors.white};
      }
  }

  .informations {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 18px;
      margin-bottom: 4px;
      font-weight: bold;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.light};
      white-space: pre-line;
  }



`;

export const Item = styled.div`
    margin-top: 20px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 30px 20px 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    transition: transform 0.3s;

    & + & {
      margin-top: 20px;
    }

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.sec};
      margin-right: 20px;
    }

    strong {
      text-transform: uppercase;
      margin-left: 10px;
      margin-right: 4px;
      padding: 2px;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.terc};
      color: ${({ theme }) => theme.colors.white};
      display: block;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.light};
      cursor: pointer;
      transform: scale(1.1);
    }

    .kilo {
      color: ${({ theme }) => theme.colors.sec};
    }
`;
