import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: block;
 
  padding: 7px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.background};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.08;
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
  }
`;
export const ButtonMore = styled(ButtonStyle)`
margin: 0 auto;
`

export const ButtonUp = styled(ButtonStyle)`
position: fixed;
bottom: 20px;
right: 50px;
border: 1px solid white;
box-shadow: rgba(255, 255, 255, 0.2) 0px 3px 6px, rgba(255, 255, 255, 0.3) 0px 3px 6px;
`