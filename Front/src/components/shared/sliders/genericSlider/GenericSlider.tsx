import { useState } from 'react';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import { useRef } from 'react';
import {
   StyledContainer,
   StyledTitle,
   StyledSlider,
   SliderContainer,
   SliderButtonLeft,
   SliderButtonRight,
} from './GenericSliderStyles';
import React from 'react';

export interface GenericSliderProps<T extends { id: React.Key }> {
   data: T[];
   renderItem: (item: T) => React.ReactNode;
   className?: string;
   title?: string;
}

export default function GenericSlider<T extends { id: React.Key }>({
   data,
   renderItem,
   className,
   title,
}: GenericSliderProps<T>) {
   const [currentSlide, setCurrentSlide] = useState(0);
   const sliderContainerRef = useRef(null);

   const handleSlideChange = (increment: number) => {
      const slideIncrement = window.innerWidth <= 768 ? increment : increment * 2;
      setCurrentSlide((prevSlide) => (prevSlide + slideIncrement + data.length) % data.length);
   };

   return (
      <StyledContainer className={className}>
         <StyledTitle>{title}</StyledTitle>
         <StyledSlider>
            <SliderButtonLeft onClick={() => handleSlideChange(-1)}>
               <MdOutlineArrowBackIos />
            </SliderButtonLeft>
            <SliderContainer ref={sliderContainerRef}>
               {data
                  .slice(currentSlide)
                  .concat(data.slice(0, currentSlide))
                  .map((item) => {
                     return <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>;
                  })}
            </SliderContainer>
            <SliderButtonRight onClick={() => handleSlideChange(1)}>
               <MdArrowForwardIos />
            </SliderButtonRight>
         </StyledSlider>
      </StyledContainer>
   );
}
