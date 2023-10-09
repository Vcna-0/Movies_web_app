import styled from 'styled-components';

export const StyledGridResults = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-column-gap: 15px;
   grid-row-gap: 15px;

   @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 24px;
   }

   @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 40px;
      grid-row-gap: 32px;
   }
`;
