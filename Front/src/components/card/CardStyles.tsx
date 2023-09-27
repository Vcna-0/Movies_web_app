import styled, { css } from 'styled-components';

interface StyledImgProps {
   isMissing?: boolean;
}

export const StyledFigure = styled.figure`
   position: relative;
   overflow: hidden;
   width: 100%;
   text-decoration: none;
   transition: transform 0.3s ease;

   &:hover {
      transform: scale(1.1);
   }
`;

export const StyledCardLink = styled.a`
   text-decoration: none;
   color: inherit;
`;

export const StyledImg = styled.img<StyledImgProps>`
   height: 110px;
   width: 100%;
   border-radius: 8px;
   opacity: 0.4;

   ${(props) =>
      !props.isMissing &&
      css`
         object-fit: cover;
         opacity: 1;
      `}

   @media screen and (min-width: 768px) {
      height: 140px;
   }

   @media screen and (min-width: 1024px) {
      height: 174px;
   }

   @media screen and (min-width: 1600px) {
      height: 204px;
   }
`;

export const StyledBookmark = styled.button`
   position: absolute;
   width: 32px;
   height: 32px;
   border-radius: 50%;
   background-color: hsl(233, 30%, 9%, 0.8);
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   top: 8px;
   right: 8px;
   font-size: 20px;
   padding: 0.5rem;
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
   gap: 1px;

   @media screen and (min-width: 768px) {
      gap: 2px;
   }
`;

export const StyledTitle = styled.h2`
   color: var(--clr-White);
   font: var(--font-HeadingXxSmall);

   @media screen and (min-width: 768px) {
      font: var(--font-HeadingXSmall);
   }
`;

export const StyledParagraph = styled.p`
   color: var(--clr-GreyishBlue);
   font: var(--font-BodySmall);

   @media screen and (min-width: 768px) {
      font: var(--font-BodyMedium);
   }
`;
