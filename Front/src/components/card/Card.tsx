import { MovieResult, TvResult } from '../../type';
import {
   StyledFigure,
   StyledCardLink,
   StyledImg,
   StyledBookmark,
   StyledFigcaption,
   StyledTitle,
   StyledParagraph,
} from './CardStyles';
import { HiOutlineBookmark } from 'react-icons/hi2';
import missingImg from '@assets/MissingImg.svg';

type Props = {
   result: MovieResult | TvResult;
};

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

export default function Card({ result }: Props) {
   console.log('result', result);

   const dateStr = result.release_date || result.first_air_date || '';
   const year = dateStr.substring(0, 4);
   const imgPath = result.backdrop_path || result.poster_path;

   return (
      <StyledFigure key={result.id}>
         <StyledCardLink href="#">
            <StyledImg
               src={imgPath ? `${IMAGE_ENDPOINT}/original${imgPath}` : missingImg}
               isMissing={!result.poster_path}
            />
            <StyledBookmark>
               <HiOutlineBookmark />
               {/* <HiMiniBookmark/>  icon bookmark remplie */}
            </StyledBookmark>
            <StyledFigcaption>
               <StyledTitle>{result.title || result.name}</StyledTitle>
               <StyledParagraph>
                  {year ? `${year} - ` : ''}
                  {result.media_type} - {result.original_language}
               </StyledParagraph>
            </StyledFigcaption>
         </StyledCardLink>
      </StyledFigure>
   );
}
