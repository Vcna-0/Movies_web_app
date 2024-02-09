import { HiOutlineBookmark } from 'react-icons/hi2';
import { StyledButtonBookmark } from './ButtonBookmarkStyle';

export type ButtonBookmarkProps = {
   buttonCard?: boolean;
};

export default function ButtonBookmark({ buttonCard }: ButtonBookmarkProps) {
   return (
      <StyledButtonBookmark buttonCard={buttonCard}>
         <HiOutlineBookmark />
         {/* <HiMiniBookmark/>  icon bookmark remplie */}
      </StyledButtonBookmark>
   );
}

ButtonBookmark.defaultProps = {
   buttonCard: false,
};
