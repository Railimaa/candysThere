import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.sec};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 0px;
  margin-top: 40px;
  border-radius: 8px;
`;
