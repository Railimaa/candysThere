import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 34px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  padding-bottom: 0px;
`;

export const Title = styled.div`
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.logo};
  padding: 4px 16px;
  margin-top: 12px;
  border-radius: 12px;
  transition: all 0.3s ease-in;



  &:hover {
    color: ${({ theme }) => theme.colors.main};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const Nav = styled.div`
  margin-top: 32px;

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    padding: 40px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.sec};
      text-decoration: none;
      font-weight: bold;
      border: 2px solid ${({ theme }) => theme.colors.sec};
      padding: 8px 12px;
      border-radius: 8px;
      transition: all 0.3s ease-in;



      &:hover {
        background: ${({ theme }) => theme.colors.sec};
        color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.white};
      }

      &.active {
        background: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const Infos = styled.div`
  .info {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.logo}
  }
`;
