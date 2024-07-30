import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router';
import { MediaDetailsType } from '@/type';
import { findById, getMovieCast } from '@/lib/theMovieDB';
import Menu from '@/components/menu/Menu';
import ButtonBookmark from '@/components/buttonBookmark/ButtonBookmark';
import CastingSlider from '@/components/shared/sliders/castingSlider/CastingSlider';
import useBookmarks from '@/hooks/useBookmarks';
import {
   StyledMain,
   StyledTitleContainer,
   StyledTitle,
   StyledImg,
   StyledInfoContainer,
   StyledInfoDetails,
   StyledGenres,
   StyledRuntimeLanguage,
   StyledVotes,
   StyledAverage,
   StyledVoteCount,
   StyledSynopsisContainer,
   StyledMainInformations,
} from './MediaDetailsStyles';

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

const getYearFromDateString = (dateString: string): string => dateString.split('-')[0];

function convertLanguageCode(languageCode: string) {
   const displayName = new Intl.DisplayNames(['fr'], { type: 'language' });
   return displayName.of(languageCode);
}

export default function MediaDetails() {
   const { id, type } = useParams<{ id?: string; type?: string }>();
   const { bookmarks } = useBookmarks();

   const [numericId, setNumericId] = useState<number | null>(null);
   const [notFound, setNotFound] = useState(false);
   const [infosMedia, setInfosMedia] = useState<MediaDetailsType | null>(null);
   const [casting, setCasting] = useState([]);

   useEffect(() => {
      const idAsNumber = parseInt(id ?? '', 10);
      if (!isNaN(idAsNumber)) {
         setNumericId(idAsNumber);
      } else {
         console.error('Invalid ID');
         setNotFound(true);
      }
   }, [id]);

   useEffect(() => {
      if (numericId !== null && type !== undefined) {
         const fetchDetails = async () => {
            try {
               const response = await findById(numericId, type);
               setInfosMedia(response);
               const cast = await getMovieCast(numericId);
               setCasting(cast.cast);
            } catch (error) {
               console.error(error);
               setNotFound(true);
            }
         };

         fetchDetails();
      }
   }, [numericId, type]);

   if (notFound) {
      return <Navigate to="/Error" />;
   }

   const isBookmarked = bookmarks.some((bookmark) => bookmark.movieId == numericId);

   return (
      <div>
         <Menu />
         {infosMedia && (
            <StyledMain>
               <StyledMainInformations>
                  <StyledTitleContainer>
                     <StyledTitle>
                        {infosMedia.title || infosMedia.name} (
                        {infosMedia.release_date
                           ? getYearFromDateString(infosMedia.release_date)
                           : infosMedia.first_air_date
                           ? getYearFromDateString(infosMedia.first_air_date)
                           : ''}
                        )
                     </StyledTitle>
                     <ButtonBookmark
                        idMedia={infosMedia.id}
                        mediaType={infosMedia.media_type}
                        isBookmarked={isBookmarked}
                     />
                  </StyledTitleContainer>
                  <StyledImg src={`${IMAGE_ENDPOINT}/original${infosMedia.poster_path}`} alt="" />
                  <StyledInfoContainer>
                     <StyledInfoDetails>
                        <StyledGenres>
                           {infosMedia.genres.map((genre, index) => (
                              <React.Fragment key={index}>
                                 <p>{genre.name}</p>
                                 {index !== infosMedia.genres.length - 1 && <>,&nbsp;</>}
                              </React.Fragment>
                           ))}
                        </StyledGenres>
                        <StyledRuntimeLanguage>
                           {Math.floor(infosMedia.runtime / 60)}h {infosMedia.runtime % 60}m -{' '}
                           {convertLanguageCode(infosMedia.original_language)}
                        </StyledRuntimeLanguage>
                     </StyledInfoDetails>

                     <StyledVotes>
                        <StyledAverage>{infosMedia.vote_average.toFixed(1)}</StyledAverage>
                        <StyledVoteCount>{infosMedia.vote_count} votes</StyledVoteCount>
                     </StyledVotes>
                  </StyledInfoContainer>
                  <StyledSynopsisContainer>
                     <h2>Synopsis</h2>
                     {infosMedia.overview}
                  </StyledSynopsisContainer>
               </StyledMainInformations>
               <CastingSlider data={casting} />
            </StyledMain>
         )}
      </div>
   );
}
