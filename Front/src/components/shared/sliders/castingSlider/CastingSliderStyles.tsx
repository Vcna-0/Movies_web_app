import styled from 'styled-components';
import GenericSlider, { GenericSliderProps } from '../genericSlider/GenericSlider';
import { CastingsType } from '@/type';

const TypedGenericSlider = GenericSlider as React.ComponentType<GenericSliderProps<{ id: React.Key } & CastingsType>>;

export const StyledCastingSlider = styled(TypedGenericSlider)``;

// DIV qui contient UNE card, a adapter en fonction du slider
export const StyledTest = styled.div`
   /* min-width: 129px; */
   flex: 0 0 29%;
`;
