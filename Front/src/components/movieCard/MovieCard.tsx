import { MovieResult, TvResult } from '../../type';
import { StyledFigure, StyledCardLink, StyledImg, StyledBookmark, StyledFigcaption, StyledTitle, StyledParagraph } from './MovieCardStyles'
import missingImg from '@assets/MissingImg.svg'
import { HiOutlineBookmark } from 'react-icons/hi2';

type Props = {
  result: MovieResult | TvResult;
}

export default function MovieCard({result}: Props) {
    console.log("result", result);

    const dateStr = result.release_date ? result.release_date : (result.first_air_date ? result.first_air_date : "");
    const year = dateStr.substring(0, 4);
    
    return (
        <StyledFigure key={result.id}>
            <StyledCardLink href='#'>
                <StyledImg 
                    src={result.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}` : missingImg}
                    isMissing={!result.backdrop_path}
                />
                <StyledBookmark>
                    <HiOutlineBookmark/>
                    {/* <HiMiniBookmark/>  icon bookmark remplie */}
                </StyledBookmark>
                <StyledFigcaption>
                    <StyledTitle>{result.title ? result.title : result.name}</StyledTitle>
                    <StyledParagraph>{year ? year : "?"} - {result.media_type} - {result.original_language}</StyledParagraph>
                </StyledFigcaption>
            </StyledCardLink>
        </StyledFigure>
    )
}
