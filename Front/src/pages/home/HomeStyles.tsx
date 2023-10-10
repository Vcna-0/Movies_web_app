import styled from 'styled-components';

export const StyledHomePage = styled.div`
   @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      align-items: baseline;
   }
`;

export const StyledMain = styled.main`
   flex: 1;
   overflow-x: auto;
   max-width: 95%;
   margin: 0 auto;
   padding: 2.125rem 1rem;

   @media screen and (min-width: 1024px) {
      max-width: 1550px;
      margin: 0 auto;
   }
`;
