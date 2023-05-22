import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background};
  background: linear-gradient(
    to top,
    ${({ theme: { colors } }) => colors.headerGradientOne},
    ${({ theme: { colors } }) => colors.headerGradientTwo}
  );
  @media screen and (min-width: 530px) {
    justify-content: space-evenly;
  }
`;
export const MainTitle = styled.h1`
  text-transform: uppercase;
  text-shadow: ${({ theme: { colors } }) => colors.textShadow} 4px 2px 3px;
`;

export const FormStyle = styled.form`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
`;
export const Input = styled.input`
  width: 330px;
  height: 30px;
  padding-left: 10px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  width: 35px;

  svg {
    width: 20px;
    height: 20px;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover svg {
    scale: 1.2;
  }
`;