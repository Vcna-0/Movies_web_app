import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMenuWrapper = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: 56px;
   padding: 1.25rem 1rem;
   margin: 0 auto;
   background: var(--clr-SemiDarkBlue);

   @media screen and (min-width: 768px) {
      margin-top: 23px;
      border-radius: 10px;
      max-width: 95%;
   }

   @media screen and (min-width: 1024px) {
      flex-direction: column;
      width: 96px;
      height: 95vh;

      position: fixed;
      top: 0;
      left: 50px;
   }
`;

export const StyledNav = styled.nav`
   display: flex;
   flex-direction: row;
   gap: 24px;

   @media screen and (min-width: 768px) {
      gap: 32px;
   }

   @media screen and (min-width: 1024px) {
      flex-direction: column;
      gap: 40px;
   }
`;

export const StyledSvg = styled.svg`
   &:hover {
      path {
         fill: var(--clr-Red);
      }
   }

   &:focus {
      path {
         fill: var(--clr-White);
      }
   }
`;

export const StyledContainerButton = styled.button`
   background: none;
   border: none;
   cursor: pointer;
`;

export const StyledButton = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   font-family: var(--font-HeadingMedium);
   color: var(--clr-White);
   align-items: center;
   justify-content: center;

   &:hover {
      path {
         fill: var(--clr-Red);
      }
   }
`;

export const StyledNavLink = styled(NavLink)`
   &.linkActive {
      path {
         fill: var(--clr-White);
      }
   }
`;
