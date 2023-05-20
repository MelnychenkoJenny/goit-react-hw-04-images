import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.backdrop};
  z-index: 1200;
`;

export const ModalContent = styled.div`
  max-width: 130vh;
  max-height: 60vw;
`;
