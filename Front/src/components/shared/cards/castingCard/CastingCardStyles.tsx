import styled from 'styled-components';
import GenericCard from '../genericCard/GenericCard';

export const StyledCastingCard = styled(GenericCard)`
   height: 195px;

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
