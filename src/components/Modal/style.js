import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;


  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.2s forwards;`}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  animation: ${scaleIn} 0.3s;
  margin: 0 auto; /* Adicione esta linha para centralizar horizontalmente */
  position: fixed; /* Adicione esta linha */
  top: 50%; /* Adicione esta linha */
  left: 50%; /* Adicione esta linha */
  transform: translate(-50%, -50%); /* Adicione esta linha */

  ${({ isLeaving }) => isLeaving && css`animation: ${scaleOut} 0.2s forwards;`}

 > h1 {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.terc};
  }

  .modal-body {
    margin-top: 32px;

    h3 {
      color: ${({ theme }) => theme.colors.main}
    }

    p {
      color: ${({ theme }) => theme.colors.main}
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 24px;
    color: #ded7d9;

    &[disabled] {
      cursor: default;
    }
  }
`;
