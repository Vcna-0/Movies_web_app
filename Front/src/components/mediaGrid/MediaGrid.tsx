import { MovieResult, TvResult } from '@/type';
import { StyledContainer, StyledGridResults, StyledParagraph } from './MediaGridStyles';
import ClassicCard from '../shared/cards/classicCard/ClassicCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Props = {
   dataMedia: Array<MovieResult | TvResult>;
   typeCard: string;
   titleSection: React.ReactNode;
};

export interface Bookmark {
   movieId: number | string;
   id: number;
}

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

const formatDate = (date: string) => {
   return date ? `${date.substring(0, 4)} - ` : '';
};

// =============================

export const fetchBookmarks = async (setBookmarks: React.Dispatch<React.SetStateAction<Bookmark[]>>) => {
   const token = localStorage.getItem('token');
   if (!token) return;

   try {
      const response = await axios.get('http://localhost:3000/api/bookmarks/getBookmarks', {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      setBookmarks(response.data);
   } catch (error) {
      console.error('Error fetching bookmarks:', error);
   }
};

// =============================

export default function MediaGrid({ dataMedia, titleSection }: Props) {
   // =============================
   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

   const refreshBookmarks = () => {
      fetchBookmarks(setBookmarks);
   };

   useEffect(() => {
      refreshBookmarks();
   }, []);

   // =============================

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
                     const isBookmarked = bookmarks.some((bookmark) => bookmark.movieId === data.id.toString());
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
