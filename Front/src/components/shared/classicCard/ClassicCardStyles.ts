import styled from 'styled-components';
import GenericCard from '../genericCard/GenericCard';

export const ClassicCardStyled = styled(GenericCard)`
      transition: transform 0.3s ease;

      &:hover {
         transform: scale(1.05);
      }

      @media screen and (min-width: 768px) {
         border-radius: 0;
         border-radius: 8px;
      }
   }
`;
