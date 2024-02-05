import { GenericCardProps } from '../genericCard/GenericCard';
import { ClassicCardStyled } from './ClassicCardStyles';

function ClassicCard(props: GenericCardProps) {
   return <ClassicCardStyled {...props} />;
}

export default ClassicCard;
