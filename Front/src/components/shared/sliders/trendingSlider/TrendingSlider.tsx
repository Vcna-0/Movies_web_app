// import GenericSlider from '@components/shared/sliders/genericSlider/GenericSlider';
import SliderCard from '@components/shared/cards/sliderCard/SliderCard';
import { SliderMovieType } from '@/type';
import { TrendingSliderStyles } from './TrendingSliderStyles';
import { StyledCard } from '../trendingSlider/TrendingSliderStyles';
import { useEffect } from 'react';

import useBookmarks from '@/hooks/useBookmarks';

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

export default function TrendingSlider({ data }: { data: SliderMovieType[] }) {
   const { bookmarks, refreshBookmarks } = useBookmarks();

   useEffect(() => {
      refreshBookmarks();
   }, []);

   const handleCards = (item: SliderMovieType) => {
      const isBookmarked = bookmarks.some((bookmark) => bookmark.movieId == item.id);
      return (
         <StyledCard>
            <SliderCard
               key={item.id}
               idMedia={item.id}
               mediaType={item.media_type}
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
               buttonBookmarkVisible={true}
               isBookmarked={isBookmarked}
               refreshBookmarks={refreshBookmarks}
            />
         </StyledCard>
      );
   };

   return <TrendingSliderStyles data={data} title="Trending" renderItem={handleCards} />;
}
