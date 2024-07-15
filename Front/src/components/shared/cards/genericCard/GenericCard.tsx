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
   mediaType: string;
   name: string;
   description: string;
   imgPath: string;
   buttonBookmarkVisible?: boolean;
   isBookmarked?: boolean;
   className?: string;
   children?: React.ReactNode;
}

export default function GenericCard({
   children,
   idMedia,
   mediaType,
   link,
   name,
   description,
   imgPath,
   buttonBookmarkVisible,
   isBookmarked,
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
         {buttonBookmarkVisible == true && (
            <ButtonBookmark idMedia={idMedia} mediaType={mediaType} buttonCard={true} isBookmarked={isBookmarked} />
         )}
      </StyledFigure>
   );
}
