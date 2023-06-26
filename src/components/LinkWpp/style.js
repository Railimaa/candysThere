import styled from 'styled-components';

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

      color: ${({ theme }) => theme.colors.terc};
      background: ${({ theme }) => theme.colors.rosinha};

      text-decoration: none;
      font-weight: bold;
      border: 2px solid ${({ theme }) => theme.colors.terc};
      padding: 8px 12px;
      border-radius: 8px;
      transition: all 0.3s ease-in;


      &:hover {
        background: ${({ theme }) => theme.colors.rosinha};
        color: ${({ theme }) => theme.colors.logo};
        transform: scale(1.1);
      }
  }
`;
