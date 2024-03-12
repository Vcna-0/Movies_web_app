import styled from 'styled-components';

export const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;

export const StyledTitle = styled.h2`
   color: var(--clr-White);
   font: var(--font-HeadingMedium);
   margin-left: 20px;

   @media screen and (min-width: 768px) {
      margin-left: 0px;
   }
`;

export const StyledSlider = styled.div`
   position: relative;
   display: flex;
   flex-direction: row;
   justify-content: center;
`;

export const SliderContainer = styled.div`
   display: flex;
   overflow-x: auto;
   -ms-overflow-style: none;
   scrollbar-width: none;
   transition: transform 300ms ease;
   gap: 10px;

   &::-webkit-scrollbar {
      display: none;
   }
`;

export const SliderButton = styled.button`
   display: none;

   @media screen and (min-width: 1024px) {
      display: block;
      position: absolute;
      z-index: 1;
      background: hsl(233, 30%, 9%, 0.7);
      padding: 20px 5px 15px 5px;
      border: none;
      color: white;
      font-size: 30px;
      text-align: center;
      transform: translateY(100%);
   }

   &:hover {
      background: var(--clr-DarkBlue);
      cursor: pointer;
   }
`;

export const SliderButtonLeft = styled(SliderButton)`
   @media screen and (min-width: 1024px) {
      left: 0;
   }
`;

export const SliderButtonRight = styled(SliderButton)`
   @media screen and (min-width: 1024px) {
      right: 0;
   }
`;
