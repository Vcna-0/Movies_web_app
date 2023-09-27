import { useState } from 'react';
import Card from '@/components/card/Card';
import { MovieResult, TvResult } from '@/type';
import {
   StyledSlider,
   SliderContainer,
   CardWrapper,
   // SliderButton,
   SliderButtonLeft,
   SliderButtonRight,
} from './TrendingSliderStyle';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

type Props = {
   dataTrending: Array<MovieResult | TvResult>;
};

export default function TrendingSlider({ dataTrending }: Props) {
   const [currentSlide, setCurrentSlide] = useState(0);

   const handleSlideChange = (increment: number) => {
      const slideIncrement = window.innerWidth <= 768 ? increment : increment * 2;
      setCurrentSlide((currentSlide + slideIncrement + dataTrending.length) % dataTrending.length);
   };

   return (
      <StyledSlider>
         <SliderButtonLeft onClick={() => handleSlideChange(-1)}>
            <MdOutlineArrowBackIos />
         </SliderButtonLeft>
         <SliderContainer>
            {/* Cette partie du code affiche une liste de cards en boucle. */}
            {dataTrending
               .slice(currentSlide)
               .concat(dataTrending.slice(0, currentSlide))
               .map((result) => (
                  <CardWrapper key={result.id}>
                     <Card data={result} type="trendingCard" />
                  </CardWrapper>
               ))}
         </SliderContainer>
         <SliderButtonRight onClick={() => handleSlideChange(1)}>
            <MdArrowForwardIos />
         </SliderButtonRight>
      </StyledSlider>
   );
}
