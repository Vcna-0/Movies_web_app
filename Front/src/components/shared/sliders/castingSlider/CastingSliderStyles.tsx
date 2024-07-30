import styled from 'styled-components';
import GenericSlider, { GenericSliderProps } from '../genericSlider/GenericSlider';
import { CastingsType } from '@/type';

const TypedGenericSlider = GenericSlider as React.ComponentType<GenericSliderProps<{ id: React.Key } & CastingsType>>;

export const StyledCastingSlider = styled(TypedGenericSlider)`
   max-width: 100%;
`;

export const StyledCard = styled.div`
   width: 129px;
`;
