import styled, { css } from 'styled-components';

interface StyledButtonProps {
   isVisible?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   border: none;
   background-color: var(--clr-GreyishBlue);
   cursor: pointer;
   position: fixed;
   bottom: 20px;
   right: 20px;
   z-index: 99;
   display: none;

   ${(props) =>
      props.isVisible &&
      css`
         display: block;
      `}

   &:hover {
      background-color: var(--clr-White);
   }
`;
