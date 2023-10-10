import { MovieResult, TvResult } from '@/type';
import { StyledContainer, StyledGridResults, StyledParagraph } from './MediaGridStyles';
import Card from '../card/Card';

type Props = {
   dataMedia: Array<MovieResult | TvResult>;
   typeCard: string;
   titleSection: string;
};

export default function MediaGrid({ dataMedia, typeCard, titleSection }: Props) {
   return (
      <StyledContainer>
         <StyledParagraph>{titleSection}</StyledParagraph>
         <StyledGridResults>
            {dataMedia
               .sort((a, b) => b.popularity - a.popularity)
               .map((result) => (
                  <Card key={result.id} data={result} type={typeCard} />
               ))}
         </StyledGridResults>
      </StyledContainer>
   );
}
