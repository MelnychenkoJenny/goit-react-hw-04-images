import styled from 'styled-components';

export const GalleryItem = styled.li`
  width: 100%;
  cursor: pointer;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.02;
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
  }
  @media screen and (min-width: 530px) {
    flex-basis: calc(100% / 2 - 10px);
  }
  @media screen and (min-width: 760px) {
    flex-basis: calc(100% / 3 - 10px);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 4 - 10px);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 220px;
  width: 100%;
`;
