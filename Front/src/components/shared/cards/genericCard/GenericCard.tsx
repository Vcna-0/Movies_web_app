import missingImg from '@assets/MissingImg.svg';
import ButtonBookmark from '@components/buttonBookmark/ButtonBookmark';
import {
   StyledCardLink,
   StyledImg,
   StyledFigcaption,
   StyledTitle,
   StyledParagraph,
   StyledFigure,
} from './GenericCardStyles';

export interface GenericCardProps {
   link?: string;
   name: string;
   description: string;
   imgPath: string;
   bookmark?: boolean;
   className?: string;
   children?: React.ReactNode;
}

export default function GenericCard({
   children,
   link,
   name,
   description,
   imgPath,
   bookmark,
   className,
}: GenericCardProps) {
   return (
      <StyledFigure className={className}>
         <StyledCardLink to={link || ''}>
            <StyledImg src={imgPath || missingImg} isMissing={!imgPath} />
            {children}
            <StyledFigcaption>
               <StyledTitle>{name}</StyledTitle>
               <StyledParagraph>{description}</StyledParagraph>
            </StyledFigcaption>
         </StyledCardLink>
         {bookmark == true && <ButtonBookmark buttonCard />}
      </StyledFigure>
   );
}
