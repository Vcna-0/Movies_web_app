import { useState } from 'react';
import Card from '@/components/card/Card';
import { MovieResult, TvResult, ETypeCard } from '@/type';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import { useRef } from 'react';
import {
   StyledContainer,
   StyledTitle,
   StyledSlider,
   SliderContainer,
   CardWrapper,
   SliderButtonLeft,
   SliderButtonRight,
} from './TrendingSliderStyle';

type Props = {
   dataTrending: Array<MovieResult | TvResult>;
   type: keyof typeof ETypeCard;
};

export default function TrendingSlider({ dataTrending, type }: Props) {
   const [currentSlide, setCurrentSlide] = useState(0);
   const sliderContainerRef = useRef(null);

   const handleSlideChange = (increment: number) => {
      const slideIncrement = window.innerWidth <= 768 ? increment : increment * 2;
      setCurrentSlide((currentSlide + slideIncrement + dataTrending.length) % dataTrending.length);
   };

   return (
      <StyledContainer>
         <StyledTitle>Trending</StyledTitle>
         <StyledSlider>
            <SliderButtonLeft onClick={() => handleSlideChange(-1)}>
               <MdOutlineArrowBackIos />
            </SliderButtonLeft>
            <SliderContainer ref={sliderContainerRef}>
               {dataTrending
                  .slice(currentSlide)
                  .concat(dataTrending.slice(0, currentSlide))
                  .map((result) => (
                     <CardWrapper key={result.id}>
                        <Card data={result} type={type} />
                     </CardWrapper>
                  ))}
            </SliderContainer>
            <SliderButtonRight onClick={() => handleSlideChange(1)}>
               <MdArrowForwardIos />
            </SliderButtonRight>
         </StyledSlider>
      </StyledContainer>
   );
}
