import { useState } from 'react';
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
import SliderCard from '../shared/sliderCard/SliderCard';

type Props = {
   dataTrending: Array<MovieResult | TvResult>;
   type: keyof typeof ETypeCard;
};

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

export default function TrendingSlider({ dataTrending }: Props) {
   const [currentSlide, setCurrentSlide] = useState(0);
   const sliderContainerRef = useRef(null);

   const handleSlideChange = (increment: number) => {
      const slideIncrement = window.innerWidth <= 768 ? increment : increment * 2;
      setCurrentSlide((currentSlide + slideIncrement + dataTrending.length) % dataTrending.length);
   };

   const formatDate = (date: string) => {
      return date ? `${date.substring(0, 4)} - ` : '';
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
                  .map((data) => (
                     <CardWrapper key={data.id}>
                        {/* <Card data={data} type={type} /> */}
                        <SliderCard
                           key={data.id}
                           link={`/${data.media_type}/${data.id}`}
                           name={data.title || data.name}
                           description={`${formatDate(data.release_date)}
                              ${data.media_type} - 
                              ${data.original_language.toUpperCase()}`}
                           imgPath={
                              data.backdrop_path
                                 ? `${IMAGE_ENDPOINT}/original${data.backdrop_path}`
                                 : `${IMAGE_ENDPOINT}/original${data.poster_path}`
                           }
                           bookmark={true}
                        />
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
