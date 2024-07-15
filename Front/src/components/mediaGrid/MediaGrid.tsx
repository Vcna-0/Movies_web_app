import { MovieResult, TvResult } from '@/type';
import { StyledContainer, StyledGridResults, StyledParagraph } from './MediaGridStyles';
import ClassicCard from '../shared/cards/classicCard/ClassicCard';

import { useEffect, useState } from 'react';
import { fetchBookmarks } from '@/lib/bookmarkService';
import { Bookmark } from '@/type';

type Props = {
   dataMedia: Array<MovieResult | TvResult>;
   typeCard: string;
   titleSection: React.ReactNode;
};

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

const formatDate = (date: string) => {
   return date ? `${date.substring(0, 4)} - ` : '';
};

export default function MediaGrid({ dataMedia, titleSection }: Props) {
   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

   const refreshBookmarks = () => {
      fetchBookmarks(setBookmarks);
   };

   useEffect(() => {
      refreshBookmarks();
   }, []);

   return (
      <StyledContainer>
         <StyledParagraph>{titleSection}</StyledParagraph>
         {dataMedia.length === 0 ? (
            <StyledParagraph>No results found</StyledParagraph>
         ) : (
            <StyledGridResults>
               {dataMedia
                  .sort((a, b) => b.popularity - a.popularity)
                  .map((data) => {
                     const isBookmarked = bookmarks.some((bookmark) => bookmark.movieId == data.id);
                     return (
                        <ClassicCard
                           key={data.id}
                           idMedia={data.id}
                           mediaType={data.media_type}
                           link={`/${data.media_type}/${data.id}`}
                           name={data.title || data.name}
                           description={`${formatDate(data.release_date)}
                        ${data.media_type} -
                        ${data.original_language && data.original_language.toUpperCase()}`}
                           imgPath={
                              data.backdrop_path
                                 ? `${IMAGE_ENDPOINT}/original${data.backdrop_path}`
                                 : `${IMAGE_ENDPOINT}/original${data.poster_path}`
                           }
                           buttonBookmarkVisible={true}
                           isBookmarked={isBookmarked}
                           refreshBookmarks={refreshBookmarks}
                        />
                     );
                  })}
            </StyledGridResults>
         )}
      </StyledContainer>
   );
}
