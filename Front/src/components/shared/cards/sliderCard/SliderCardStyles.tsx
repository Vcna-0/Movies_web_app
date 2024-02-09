import styled from 'styled-components';
import GenericCard from '../genericCard/GenericCard';

export const StyledSliderCard = styled(GenericCard)`
   height: 195px;

   &:hover img {
      transform: scale(1.1);
   }

   @media screen and (min-width: 1024px) {
      height: 210px;
   }

   img {
      height: 100%;

      @media screen and (max-width: 768px) {
         border-radius: 0;
      }

      @media screen and (min-width: 1024px) {
         height: 100%;
      }
   }

   figcaption {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 16px 16px;
   }

   p {
      color: var(--clr-White);
   }
`;

export const StyledFilterImg = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   bottom: 0px;
   background: linear-gradient(hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.5));
`;
