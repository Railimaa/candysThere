import styled from 'styled-components';

export const Container = styled.div`
  a {
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

    margin-right: 20px;
    margin-bottom: 20px;
  }
`;
