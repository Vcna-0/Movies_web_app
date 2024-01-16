import styled from 'styled-components';

export const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   padding: 15px;
`;

export const StyledGridResults = styled.div`
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   grid-row-gap: 20px;

   @media screen and (min-width: 450px) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 25px;
   }

   @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
   }

   @media screen and (min-width: 1400px) {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 40px;
      grid-row-gap: 35px;
   }
`;

export const StyledParagraph = styled.p`
   color: var(--clr-White);
   font: var(--font-HeadingMedium);
   display: flex;
   align-items: center;
   gap: 15px;
`;
