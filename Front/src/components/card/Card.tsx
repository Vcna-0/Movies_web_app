import { MovieResult, TvResult } from '../../type';
import {
   StyledFigure,
   StyledCardLink,
   StyledImg,
   StyledBookmark,
   StyledFigcaption,
   StyledTitle,
   StyledParagraph,
   StyledFilterImg,
} from './CardStyles';
import { HiOutlineBookmark } from 'react-icons/hi2';
import missingImg from '@assets/MissingImg.svg';

type Props = {
   data: MovieResult | TvResult;
   type: string;
};

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

export default function Card({ data, type }: Props) {
   const dateStr = data.release_date || data.first_air_date || '';
   const year = dateStr.substring(0, 4);
   const imgPath = data.backdrop_path || data.poster_path;

   return (
      <StyledFigure key={data.id} typeCard={type}>
         {/* <StyledCardLink to={`/media/${data.id}?type=${data.media_type}`}> */}
         <StyledCardLink to={`/${data.media_type}/${data.id}`}>
            <StyledImg
               src={imgPath ? `${IMAGE_ENDPOINT}/original${imgPath}` : missingImg}
               isMissing={!imgPath}
               typeCard={type}
            />
            {type === 'trendingCard' && <StyledFilterImg />}

            <StyledBookmark>
               <HiOutlineBookmark />
               {/* <HiMiniBookmark/>  icon bookmark remplie */}
            </StyledBookmark>
            <StyledFigcaption typeCard={type}>
               <StyledTitle>{data.title || data.name}</StyledTitle>
               <StyledParagraph typeCard={type}>
                  {year ? `${year} - ` : ''}
                  {`${data.media_type} - ${data.original_language.toUpperCase()}`}
               </StyledParagraph>
            </StyledFigcaption>
         </StyledCardLink>
      </StyledFigure>
   );
}
