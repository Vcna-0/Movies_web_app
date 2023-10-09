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
      max-width: 1650px;
      margin: 0 auto;
   }
`;

export const StyledParagraph = styled.p`
   color: var(--clr-White);
   font: var(--font-HeadingMedium);
`;

export const StyledResult = styled.div`
   margin-top: 1.5rem;
`;
