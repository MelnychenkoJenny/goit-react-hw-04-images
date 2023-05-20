import styled from 'styled-components';

export const Container = styled.section`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;


export const ButtonMore = styled.button`
  display: block;
  margin: 0 auto;
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
