import { useState } from 'react';
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
} from './GenericSliderStyles';

export interface GenericSliderProps<T extends { id: React.Key }> {
   data: T[];
   renderItem: (item: T) => React.ReactNode;
   className?: string;
}

export default function GenericSlider<T extends { id: React.Key }>({
   data,
   renderItem,
   className,
}: GenericSliderProps<T>) {
   const [currentSlide, setCurrentSlide] = useState(0);
   const sliderContainerRef = useRef(null);

   const handleSlideChange = (increment: number) => {
      const slideIncrement = window.innerWidth <= 768 ? increment : increment * 2;
      // setCurrentSlide((currentSlide + slideIncrement + data.length) % data.length);
      setCurrentSlide((prevSlide) => (prevSlide + slideIncrement + data.length) % data.length);
   };

   return (
      <StyledContainer className={className}>
         <StyledTitle>Trending</StyledTitle>
         <StyledSlider>
            <SliderButtonLeft onClick={() => handleSlideChange(-1)}>
               <MdOutlineArrowBackIos />
            </SliderButtonLeft>
            <SliderContainer ref={sliderContainerRef}>
               {data
                  .slice(currentSlide)
                  .concat(data.slice(0, currentSlide))
                  .map((item) => {
                     console.log(item.id);
                     return <CardWrapper key={item.id}>{renderItem(item)}</CardWrapper>;
                  })}
            </SliderContainer>
            <SliderButtonRight onClick={() => handleSlideChange(1)}>
               <MdArrowForwardIos />
            </SliderButtonRight>
         </StyledSlider>
      </StyledContainer>
   );
}
