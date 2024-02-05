import missingImg from '@assets/MissingImg.svg';
import {
   StyledCardLink,
   StyledImg,
   StyledBookmark,
   StyledFigcaption,
   StyledTitle,
   StyledParagraph,
   StyledFigure,
} from './GenericCardStyles';
import { HiOutlineBookmark } from 'react-icons/hi2';

export interface GenericCardProps {
   link: string;
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
         <StyledCardLink to={link}>
            <StyledImg src={imgPath || missingImg} isMissing={!imgPath} />
            {children}
            {bookmark == true && (
               <StyledBookmark>
                  <HiOutlineBookmark />
                  {/* <HiMiniBookmark/>  icon bookmark remplie */}
               </StyledBookmark>
            )}
            <StyledFigcaption>
               <StyledTitle>{name}</StyledTitle>
               <StyledParagraph>{description}</StyledParagraph>
            </StyledFigcaption>
         </StyledCardLink>
      </StyledFigure>
   );
}
