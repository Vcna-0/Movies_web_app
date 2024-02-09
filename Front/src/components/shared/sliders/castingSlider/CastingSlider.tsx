import { SliderCastingsType } from '@/type';
import CastingCard from '@components/shared/cards/castingCard/CastingCard';
// import { StyledCastingSlider } from './CastingSliderStyles';
import GenericSlider from '../genericSlider/GenericSlider';

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

export default function CastingSlider({ data }: { data: SliderCastingsType[] }) {
   return (
      <GenericSlider
         data={data}
         renderItem={(item: SliderCastingsType) => (
            <CastingCard
               key={item.id}
               name={item.name}
               description={item.character}
               imgPath={item.profile_path ? `${IMAGE_ENDPOINT}/original${item.profile_path}` : ``}
               bookmark={false}
            />
         )}
      />
   );
}
