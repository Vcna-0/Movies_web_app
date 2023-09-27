import styled from 'styled-components';

export const StyledSlider = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 20px;
   max-width: 1600px;
   margin: 0 auto;
`;
export const SliderContainer = styled.div`
   /* position: relative; */
   display: flex;
   overflow-x: auto;
   max-width: 100%;
   margin-bottom: 20px;
   position: relative;
   min-height: 100px;
   -ms-overflow-style: none; /* IE et Edge */
   scrollbar-width: none; /* Firefox */
   &::-webkit-scrollbar {
      width: 0.1em;
   }

   scroll-behavior: smooth;
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
   /* position: absolute;
   z-index: 1;
   top: 155px;
   left: 150px; */
`;
export const SliderButtonRight = styled(SliderButton)`
   /* position: absolute;
   top: 155px;
   right: 0; */
`;

//  ========= TEST
// export const SliderContainer = styled.div`
//    display: flex;
//    overflow-x: auto; /* Active le défilement horizontal */
//    max-width: 100%;
//    margin-bottom: 20px;
//    position: relative;
//    min-height: 100px;
//    -ms-overflow-style: none; /* IE et Edge */
//    scrollbar-width: none; /* Firefox */
//    /* Masque la barre de défilement horizontale */
//    /* scrollbar-width: thin; WebKit */
//    /* scrollbar-color: transparent transparent; WebKit */
//    &::-webkit-scrollbar {
//       width: 0.1em;
//    }
//    /* &::-webkit-scrollbar-thumb {
//       background-color: transparent;
//    } */

//    &:hover .CardWrapper {
//       transform: translateX(-25%);
//    }
// `;
