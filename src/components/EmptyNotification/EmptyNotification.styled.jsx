import styled from 'styled-components';

export const Empty = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-direction: column;
`;
export const EmptyText = styled.p`
  width: 300px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 530px) {
    width: 500px;
  }
`;

export const EmptyImage = styled.img`
  width: 170px;
  margin: 0 auto;
`;
