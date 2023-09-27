import styled from 'styled-components';

export const StyledSlider = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
`;
export const SliderContainer = styled.div`
   display: flex;
   overflow-x: auto;
   padding: 15px;
   -ms-overflow-style: none; /* IE et Edge */
   scrollbar-width: none; /* Firefox */

   &::-webkit-scrollbar {
      display: none;
   }

   transition: transform 300ms ease;
`;

export const CardWrapper = styled.div`
   min-width: 350px; /* Largeur d'une carte */
   margin-right: 30px; /* Marge entre les cartes */
   flex: 0 0 19.7%;
`;

export const SliderButton = styled.button`
   background: transparent;
   border: none;
   color: white;
   font-size: 50px;
`;

export const SliderButtonLeft = styled(SliderButton)`
   transform: translateX(-25%);
`;
export const SliderButtonRight = styled(SliderButton)`
   transform: translateX(25%);
`;
