// import GenericSlider from '@components/shared/sliders/genericSlider/GenericSlider';
import SliderCard from '@components/shared/cards/sliderCard/SliderCard';
import { SliderMovieType } from '@/type';
import { TrendingSliderStyles } from './TrendingSliderStyles';
import { StyledCard } from '../trendingSlider/TrendingSliderStyles';

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

export default function TrendingSlider({ data }: { data: SliderMovieType[] }) {
   const handleCards = (item: SliderMovieType) => {
      return (
         <StyledCard>
            <SliderCard
               key={item.id}
               link={`/${item.media_type}/${item.id}`}
               name={item.title || item.name}
               description={`${item.release_date ? item.release_date.substring(0, 4) + ' - ' : ''}${
                  item.media_type
               } - ${item.original_language.toUpperCase()}`}
               imgPath={
                  item.backdrop_path
                     ? `${IMAGE_ENDPOINT}/original${item.backdrop_path}`
                     : `${IMAGE_ENDPOINT}/original${item.poster_path}`
               }
               bookmark={true}
            />
         </StyledCard>
      );
   };

   return <TrendingSliderStyles data={data} title="Trending" renderItem={handleCards} />;
}
