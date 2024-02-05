import { GenericCardProps } from '../genericCard/GenericCard';
import { StyledSliderCard, StyledFilterImg } from './SliderCardStyles';

export default function SliderCard(props: GenericCardProps) {
   return (
      <StyledSliderCard {...props}>
         <StyledFilterImg />
      </StyledSliderCard>
   );
}
