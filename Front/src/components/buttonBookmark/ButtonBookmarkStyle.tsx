import styled, { css } from 'styled-components';
import { ButtonBookmarkProps } from './ButtonBookmark';

export const StyledButtonBookmark = styled.button<ButtonBookmarkProps>`
   ${(props) =>
      props.buttonCard === true &&
      css`
         position: absolute;
         top: 8px;
         right: 8px;
      `}

   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0.5rem;
   width: 32px;
   height: 32px;
   border-radius: 50%;
   background-color: hsl(233, 30%, 9%, 0.8);
   color: white;
   font-size: 20px;
   cursor: pointer;
   border: none;

   @media screen and (min-width: 1024px) {
      width: 40px;
      height: 40px;
   }

   @media screen and (min-width: 1600px) {
      width: 48px;
      height: 48px;
   }
`;
