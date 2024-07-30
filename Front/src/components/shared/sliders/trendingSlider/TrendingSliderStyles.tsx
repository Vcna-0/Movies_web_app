import styled from 'styled-components';
import GenericSlider, { GenericSliderProps } from '../genericSlider/GenericSlider';
import { SliderMovieType } from '@/type';

const TypedGenericSlider = GenericSlider as React.ComponentType<
   GenericSliderProps<{ id: React.Key } & SliderMovieType>
>;

export const TrendingSliderStyles = styled(TypedGenericSlider)``;

// DIV qui contient UNE card, a adapter en fonction du slider
export const StyledCard = styled.div`
   min-width: 350px;
   flex: 0 0 19.7%;
`;
