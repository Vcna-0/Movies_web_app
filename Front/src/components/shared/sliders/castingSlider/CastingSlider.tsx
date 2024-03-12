import { CastingsType, SliderCastingsType } from '@/type';
import CastingCard from '@components/shared/cards/castingCard/CastingCard';
// import { StyledCastingSlider } from './CastingSliderStyles';
// import GenericSlider from '../genericSlider/GenericSlider';
import { StyledCastingSlider, StyledTest } from './CastingSliderStyles';

const IMAGE_ENDPOINT = import.meta.env.VITE_APP_TMDB_IMAGE_ENDPOINT;

export default function CastingSlider({ data }: { data: SliderCastingsType[] }) {
   return (
      <StyledCastingSlider
         data={data}
         renderItem={(item: CastingsType) => (
            <StyledTest>
               <CastingCard
                  key={item.id}
                  name={item.name}
                  description={item.character}
                  imgPath={item.profile_path ? `${IMAGE_ENDPOINT}/original${item.profile_path}` : ``}
                  bookmark={false}
               />
            </StyledTest>
         )}
      />
   );
}
