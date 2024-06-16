import { MovieResult, TvResult } from '@/type';
import { StyledContainer, StyledGridResults, StyledParagraph } from './MediaGridStyles';
import ClassicCard from '../shared/cards/classicCard/ClassicCard';

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
   return (
      <StyledContainer>
         <StyledParagraph>{titleSection}</StyledParagraph>
         <StyledGridResults>
            {dataMedia
               .sort((a, b) => b.popularity - a.popularity)
               .map((data) => (
                  <ClassicCard
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
               ))}
         </StyledGridResults>
      </StyledContainer>
   );
}
