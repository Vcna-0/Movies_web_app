import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledImgProps {
   isMissing?: boolean;
   typeCard: string;
}

interface StyledFigcaptionProps {
   typeCard: string;
}

export const StyledFigure = styled.figure<StyledImgProps>`
   position: relative;
   width: 100%;
   overflow: hidden;
   text-decoration: none;

   @media screen and (min-width: 768px) {
      border-radius: 0;
      border-radius: 8px;
   }

   ${(props) =>
      (props.typeCard === 'classicCard' || props.typeCard === 'popularCard') &&
      css`
         transition: transform 0.3s ease;
         &:hover {
            transform: scale(1.05);
         }
      `}

   ${(props) =>
      props.typeCard === 'trendingCard' &&
      css`
         height: 195px;

         &:hover img {
            transform: scale(1.1);
         }

         @media screen and (min-width: 1024px) {
            height: 210px;
         }
      `}
`;

export const StyledCardLink = styled(Link)`
   text-decoration: none;
   color: inherit;
`;

export const StyledImg = styled.img<StyledImgProps>`
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
      props.typeCard === 'trendingCard' &&
      css`
         height: 100%;

         @media screen and (max-width: 768px) {
            border-radius: 0;
         }

         @media screen and (min-width: 1024px) {
            height: 100%;
         }
      `}

   ${(props) =>
      props.isMissing &&
      css`
         object-fit: contain;
         opacity: 0.4;
      `}
`;

export const StyledFilterImg = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   bottom: 0px;
   background: linear-gradient(hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.5));
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

export const StyledFigcaption = styled.figcaption<StyledFigcaptionProps>`
   display: flex;
   flex-direction: column-reverse;
   gap: 2px;

   ${(props) =>
      props.typeCard === 'trendingCard' &&
      css`
         position: absolute;
         bottom: 0;
         left: 0;
         padding: 16px 16px;
      `}
`;

export const StyledTitle = styled.h3`
   color: var(--clr-White);
   font: var(--font-HeadingXxSmall);

   @media screen and (min-width: 768px) {
      font: var(--font-HeadingXSmall);
   }
`;

export const StyledParagraph = styled.p<StyledFigcaptionProps>`
   color: var(--clr-GreyishBlue);
   font: var(--font-BodySmall);
   display: flex;
   align-items: center;
   gap: 5px;

   ${(props) =>
      props.typeCard === 'trendingCard' &&
      css`
         color: var(--clr-White);
      `}

   @media screen and (min-width: 768px) {
      font: var(--font-BodyMedium);
   }
`;
