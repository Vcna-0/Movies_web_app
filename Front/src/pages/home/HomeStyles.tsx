import styled from 'styled-components';

export const StyledHomePage = styled.div`
   @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      align-items: baseline;
   }
`;

export const StyledMain = styled.main`
   flex: 1;
   /* Vos styles pour le contenu principal */
   overflow-x: auto; /* Active le défilement horizontal au besoin */
   max-width: 100%;

   padding: 2.125rem 1rem;

   @media screen and (min-width: 1024px) {
      padding: 0 2.25rem;
   }
`;

export const StyledParagraph = styled.p`
   color: var(--clr-White);
   font: var(--font-HeadingMedium);
`;

export const StyledResult = styled.div`
   margin-top: 1.5rem;
`;

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
