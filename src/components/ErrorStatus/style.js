import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.terc};
      display: block;
      margin-bottom: 8px;
    }

    button {
      height: 52px;
      border: none;
      padding: 0 16px;
      background: ${({ theme }) => theme.colors.logo};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
      font-size: 16px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      transition: background 0.2s ease-in;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: ${({ theme }) => theme.colors.terc};
        color: ${({ theme }) => theme.colors.white};

      }
    }
  }
`;
