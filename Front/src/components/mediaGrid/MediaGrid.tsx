import { MovieResult, TvResult } from '@/type';
import { StyledGridResults } from './MediaGridStyles';
import Card from '../card/Card';

type Props = {
   dataMedia: Array<MovieResult | TvResult>;
   allowedMediaTypes: Array<string>;
   typeCard: string;
};

export default function MediaGrid({ dataMedia, allowedMediaTypes, typeCard }: Props) {
   return (
      <StyledGridResults>
         {dataMedia
            .sort((a, b) => b.popularity - a.popularity)
            .map(
               (result) =>
                  allowedMediaTypes.includes(result.media_type) && (
                     <Card key={result.id} data={result} type={typeCard} />
                  )
            )}
      </StyledGridResults>
   );
}
