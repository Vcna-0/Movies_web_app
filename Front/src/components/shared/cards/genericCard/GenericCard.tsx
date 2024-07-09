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
import { Bookmark } from '@/components/mediaGrid/MediaGrid';

export interface GenericCardProps {
   link?: string;
   idMedia: number;
   name: string;
   description: string;
   imgPath: string;
   buttonBookmarkVisible?: boolean;
   isBookmarked?: boolean;
   className?: string;
   children?: React.ReactNode;
   refreshBookmarks?: () => void;
}

export default function GenericCard({
   children,
   idMedia,
   link,
   name,
   description,
   imgPath,
   buttonBookmarkVisible,
   isBookmarked,
   className,
   refreshBookmarks,
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
            <ButtonBookmark
               idMedia={idMedia}
               buttonCard={true}
               isBookmarked={isBookmarked}
               refreshBookmarks={refreshBookmarks}
            />
         )}
      </StyledFigure>
   );
}
