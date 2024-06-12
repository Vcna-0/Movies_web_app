import { CastingsType, SliderCastingsType } from '@/type';
import CastingCard from '@components/shared/cards/castingCard/CastingCard';
import { StyledCastingSlider, StyledCard } from './CastingSliderStyles';

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

export default function CastingSlider({ data }: { data: SliderCastingsType[] }) {
   const renderItem = (item: CastingsType) => {
      return (
         <StyledCard>
            <CastingCard
               key={item.id}
               name={item.name}
               description={item.character}
               imgPath={item.profile_path ? `${IMAGE_ENDPOINT}/original${item.profile_path}` : ``}
               bookmark={false}
            />
         </StyledCard>
      );
   };

   return <StyledCastingSlider data={data} title="Casting" renderItem={renderItem} />;
}
