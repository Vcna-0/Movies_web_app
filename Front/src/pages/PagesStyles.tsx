import styled from 'styled-components';

export const StyledHomePage = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      width: 95%;
      margin: 0 auto;
   }
`;

export const StyledMain = styled.main`
   overflow-x: auto;
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media screen and (min-width: 768px) {
      width: 95%;
      max-width: 1550px;
      margin: 0 auto;
      gap: 3.5rem;
   }
`;
