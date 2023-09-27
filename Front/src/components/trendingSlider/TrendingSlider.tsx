import { useState } from 'react';
import Card from '@/components/card/Card';
import { MovieResult, TvResult } from '@/type';
import { StyledSlider, SliderContainer, CardWrapper, SliderButtonLeft, SliderButtonRight } from './TrendingSliderStyle';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
type Props = {
   data: Array<MovieResult | TvResult>;
};

export default function TrendingSlider({ data }: Props) {
   const [currentSlide, setCurrentSlide] = useState(0);

   const handleSlideChange = (increment: number) => {
      const slideIncrement = window.innerWidth <= 768 ? increment : increment * 2;
      setCurrentSlide((currentSlide + slideIncrement + data.length) % data.length);
   };

   return (
      <StyledSlider>
         <SliderButtonLeft onClick={() => handleSlideChange(-1)}>
            <MdOutlineArrowBackIos />
         </SliderButtonLeft>
         <SliderContainer>
            {/* Cette partie du code affiche une liste de cards en boucle. */}
            {data
               .slice(currentSlide)
               .concat(data.slice(0, currentSlide))
               .map((result) => (
                  <CardWrapper key={result.id}>
                     <Card result={result} />
                  </CardWrapper>
               ))}
         </SliderContainer>
         <SliderButtonRight onClick={() => handleSlideChange(1)}>
            <MdArrowForwardIos />
         </SliderButtonRight>
      </StyledSlider>
   );
}
