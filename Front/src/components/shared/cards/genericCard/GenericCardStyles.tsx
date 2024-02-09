import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFigure = styled.figure`
   position: relative;
   width: 100%;
   overflow: hidden;
   text-decoration: none;

   @media screen and (min-width: 768px) {
      border-radius: 0;
      border-radius: 8px;
   }
`;

export const StyledCardLink = styled(Link)`
   text-decoration: none;
   color: inherit;
`;

export const StyledImg = styled.img<{ isMissing: boolean }>`
   width: 100%;
   object-fit: cover;
   opacity: 1;
   border-radius: 8px;
   overflow-clip-margin: unset;
   transition: transform 0.3s ease;

   @media screen and (min-width: 1024px) {
      height: 174px;
   }

   @media screen and (min-width: 1600px) {
      height: 204px;
   }

   ${(props) =>
      props.isMissing &&
      css`
         object-fit: contain;
         opacity: 0.4;
      `}
`;

export const StyledBookmark = styled.button`
   position: absolute;
   top: 8px;
   right: 8px;
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

export const StyledFigcaption = styled.figcaption`
   display: flex;
   flex-direction: column-reverse;
   gap: 2px;
`;

export const StyledTitle = styled.h3`
   color: var(--clr-White);
   font: var(--font-HeadingXxSmall);

   @media screen and (min-width: 768px) {
      font: var(--font-HeadingXSmall);
   }
`;

export const StyledParagraph = styled.p`
   color: var(--clr-GreyishBlue);
   font: var(--font-BodySmall);
   display: flex;
   align-items: center;
   gap: 5px;

   @media screen and (min-width: 768px) {
      font: var(--font-BodyMedium);
   }
`;
