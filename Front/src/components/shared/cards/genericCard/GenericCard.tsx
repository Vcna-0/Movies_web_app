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
   idMedia: number;
   name: string;
   description: string;
   imgPath: string;
   bookmark?: boolean;
   className?: string;
   children?: React.ReactNode;
}

export default function GenericCard({
   children,
   idMedia,
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
         {bookmark == true && <ButtonBookmark idMedia={idMedia} buttonCard={true} />}
      </StyledFigure>
   );
}
